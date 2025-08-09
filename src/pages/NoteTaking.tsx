import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useEffect, useMemo, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { Plus, Save, X, PenTool, Search, Trash2 } from "lucide-react";

interface ProfileRow { id: string }
interface NoteRow {
  id: string;
  user_id: string | null;
  title: string | null;
  content: string;
  created_at: string;
  updated_at: string;
  tags: string[] | null;
}

export default function NoteTaking() {
  const [profileId, setProfileId] = useState<string | null>(null);
  const [notes, setNotes] = useState<NoteRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [creating, setCreating] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [form, setForm] = useState({ title: "", content: "" });
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    const init = async () => {
      setLoading(true);
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate("/auth");
        return;
      }
      const { data: profile, error: pErr } = await supabase
        .from('profiles')
        .select('id')
        .eq('auth_id', session.user.id)
        .single<ProfileRow>();
      if (pErr || !profile) {
        toast({ title: 'Profile not found', description: 'Please re-login.', variant: 'destructive' });
        navigate('/auth');
        return;
      }
      setProfileId(profile.id);
      await loadNotes(profile.id);
      setLoading(false);
    };
    init();
  }, [navigate, toast]);

  const loadNotes = async (pid: string) => {
    const { data, error } = await supabase
      .from('notes')
      .select('id, user_id, title, content, created_at, updated_at, tags')
      .eq('user_id', pid)
      .order('created_at', { ascending: false });
    if (error) {
      toast({ title: 'Failed to load notes', description: error.message, variant: 'destructive' });
      return;
    }
    setNotes(data || []);
  };

  const filteredNotes = useMemo(() => {
    if (!search) return notes;
    const q = search.toLowerCase();
    return notes.filter(n => (n.title || '').toLowerCase().includes(q) || n.content.toLowerCase().includes(q));
  }, [notes, search]);

  const resetForm = () => setForm({ title: "", content: "" });

  const onCreate = async () => {
    if (!profileId) return;
    if (!form.content.trim()) {
      toast({ title: 'Content required', description: 'Please write something.', variant: 'destructive' });
      return;
    }
    const { data, error } = await supabase
      .from('notes')
      .insert({ user_id: profileId, title: form.title || null, content: form.content, tags: null })
      .select('id')
      .single();
    if (error) {
      toast({ title: 'Failed to create note', description: error.message, variant: 'destructive' });
      return;
    }
    toast({ title: 'Note created' });
    resetForm();
    setCreating(false);
    await loadNotes(profileId);
    // Optionally scroll to the new note
  };

  const onDelete = async (id: string) => {
    if (!profileId) return;
    const { error } = await supabase.from('notes').delete().eq('id', id).eq('user_id', profileId);
    if (error) {
      toast({ title: 'Failed to delete', description: error.message, variant: 'destructive' });
      return;
    }
    toast({ title: 'Note deleted' });
    await loadNotes(profileId);
  };

  const onStartEdit = (note: NoteRow) => {
    setEditingId(note.id);
    setForm({ title: note.title || '', content: note.content });
  };

  const onSaveEdit = async () => {
    if (!profileId || !editingId) return;
    if (!form.content.trim()) {
      toast({ title: 'Content required', description: 'Please write something.', variant: 'destructive' });
      return;
    }
    const { error } = await supabase
      .from('notes')
      .update({ title: form.title || null, content: form.content })
      .eq('id', editingId)
      .eq('user_id', profileId);
    if (error) {
      toast({ title: 'Failed to save', description: error.message, variant: 'destructive' });
      return;
    }
    toast({ title: 'Note saved' });
    setEditingId(null);
    resetForm();
    await loadNotes(profileId);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="py-8 bg-gradient-to-br from-background via-cream-warm to-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-gold rounded-xl flex items-center justify-center"><PenTool className="h-6 w-6 text-accent-foreground" /></div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold gradient-text">Your Notes</h1>
              <p className="text-sm text-muted-foreground">Create and organize your reading insights</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Left: create/edit */}
            <Card className="card-premium md:col-span-1">
              <CardHeader>
                <CardTitle>{editingId ? 'Edit note' : 'New note'}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Input placeholder="Title (optional)" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
                <Textarea rows={10} placeholder="Write your note..." value={form.content} onChange={(e) => setForm({ ...form, content: e.target.value })} />
                <div className="flex gap-2">
                  {editingId ? (
                    <>
                      <Button onClick={onSaveEdit} className="hero-button"><Save className="w-4 h-4 mr-2" />Save</Button>
                      <Button variant="outline" onClick={() => { setEditingId(null); resetForm(); }}><X className="w-4 h-4 mr-2" />Cancel</Button>
                    </>
                  ) : (
                    <>
                      <Button onClick={onCreate} className="gold-button"><Plus className="w-4 h-4 mr-2" />Create</Button>
                      <Button variant="outline" onClick={resetForm}><X className="w-4 h-4 mr-2" />Clear</Button>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Right: list/search */}
            <div className="md:col-span-2">
              <Card className="card-premium mb-4">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2">
                    <Search className="w-4 h-4 text-muted-foreground" />
                    <Input placeholder="Search notes..." value={search} onChange={(e) => setSearch(e.target.value)} />
                  </div>
                </CardContent>
              </Card>

              {loading ? (
                <p className="text-muted-foreground">Loading notes…</p>
              ) : filteredNotes.length === 0 ? (
                <Card className="card-premium">
                  <CardContent className="p-6 text-center">
                    <p className="text-muted-foreground">No notes match your search.</p>
                  </CardContent>
                </Card>
              ) : (
                <div className="space-y-3">
                  {filteredNotes.map((n) => (
                    <Card key={n.id} className="card-premium">
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start gap-3">
                          <div className="flex-1">
                            <h4 className="font-semibold mb-1">{n.title || 'Untitled note'}</h4>
                            <p className="text-sm text-muted-foreground whitespace-pre-wrap">{n.content}</p>
                            <div className="flex gap-2 mt-2">
                              {n.tags?.map(t => <Badge key={t} variant="outline" className="text-xs">{t}</Badge>)}
                            </div>
                            <p className="text-xs text-muted-foreground mt-2">Updated {new Date(n.updated_at).toLocaleString()}</p>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm" onClick={() => onStartEdit(n)}><PenTool className="w-4 h-4 mr-1" />Edit</Button>
                            <Button variant="destructive" size="sm" onClick={() => onDelete(n.id)}><Trash2 className="w-4 h-4 mr-1" />Delete</Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}