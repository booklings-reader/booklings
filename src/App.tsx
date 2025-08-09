import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Personal from "./pages/Personal";
import ReadingTimer from "./pages/ReadingTimer";
import Library from "./pages/Library";
import NoteTaking from "./pages/NoteTaking";
import Community from "./pages/Community";
import Reflections from "./pages/Reflections";
import Profile from "./pages/Profile";
import About from "./pages/About";
import AiChat from "./pages/AiChat";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/personal" element={<Personal />} />
          <Route path="/personal/timer" element={<ReadingTimer />} />
          <Route path="/personal/library" element={<Library />} />
          <Route path="/personal/notes" element={<NoteTaking />} />
          <Route path="/community" element={<Community />} />
          <Route path="/community/reflections" element={<Reflections />} />
          <Route path="/community/profile" element={<Profile />} />
          <Route path="/about" element={<About />} />
          <Route path="/ai-chat" element={<AiChat />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
