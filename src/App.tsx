
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import NewProject from "./pages/NewProject";
import ProjectEditor from "./pages/ProjectEditor";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/projects" element={<Layout><Projects /></Layout>} />
          <Route path="/projects/new" element={<Layout><NewProject /></Layout>} />
          <Route path="/projects/:id" element={<Layout><ProjectEditor /></Layout>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
