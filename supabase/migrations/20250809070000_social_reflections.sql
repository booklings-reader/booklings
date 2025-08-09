-- Follows table for simple social graph
create table if not exists public.follows (
  follower_id uuid references public.profiles(id) on delete cascade,
  followee_id uuid references public.profiles(id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (follower_id, followee_id)
);

alter table public.follows enable row level security;

-- Only allow a user to manage their own follows
create policy if not exists "view my follows" on public.follows
  for select using (
    follower_id in (select id from public.profiles where auth_id = auth.uid())
    or followee_id in (select id from public.profiles where auth_id = auth.uid())
  );

create policy if not exists "follow someone" on public.follows
  for insert with check (
    follower_id in (select id from public.profiles where auth_id = auth.uid())
  );

create policy if not exists "unfollow" on public.follows
  for delete using (
    follower_id in (select id from public.profiles where auth_id = auth.uid())
  );

-- Reflections table (mini posts)
create table if not exists public.reflections (
  id uuid primary key default gen_random_uuid(),
  author_user_id uuid references public.profiles(id) on delete cascade,
  content text not null,
  created_at timestamptz not null default now()
);

alter table public.reflections enable row level security;

-- Author can manage their reflections
create policy if not exists "author read own reflections" on public.reflections
  for select using (
    author_user_id in (select id from public.profiles where auth_id = auth.uid())
  );

create policy if not exists "author write own reflections" on public.reflections
  for all using (
    author_user_id in (select id from public.profiles where auth_id = auth.uid())
  ) with check (
    author_user_id in (select id from public.profiles where auth_id = auth.uid())
  );

-- Followers can read followees' reflections
create policy if not exists "followers can read followees" on public.reflections
  for select using (
    author_user_id in (
      select f.followee_id from public.follows f
      where f.follower_id in (select id from public.profiles where auth_id = auth.uid())
    )
  ); 