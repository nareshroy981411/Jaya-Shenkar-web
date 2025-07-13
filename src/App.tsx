
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import OurStory from "./pages/about/OurStory";
import VisionMission from "./pages/about/VisionMission";
import FoundersLeadership from "./pages/about/FoundersLeadership";
import OurTeam from "./pages/about/OurTeam";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import IndustrialPark from "./pages/business/IndustrialPark";
import PulpPaper from "./pages/business/PulpPaper";
import PowerInfrastructure from "./pages/business/PowerInfrastructure";
import Projects from "./pages/Projects";
import Investors from "./pages/Investors";
import Sustainability from "./pages/Sustainability";
import News from "./pages/News";
import Careers from "./pages/Careers";
import Clients from "./pages/Clients";
import ChhattisgarhIndustrialPark from "./pages/business/industrial/ChhattisgarhIndustrialPark";
import OdishaPharmaCity from "./pages/business/industrial/OdishaPharmaCity";
import HindupurIndustrialPark from "./pages/business/industrial/HindupurIndustrialPark";
import BayyavaramPaperMill from "./pages/business/paper/BayyavaramPaperMill";
import KontaPaperMill from "./pages/business/paper/KontaPaperMill";
import AssamAgroforestryProject from "./pages/business/paper/AssamAgroforestryProject";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/our-story" element={<OurStory />} />
          <Route path="/about/vision-mission" element={<VisionMission />} />
          <Route path="/about/founders-leadership" element={<FoundersLeadership />} />
          <Route path="/about/our-team" element={<OurTeam />} />
          <Route path="/contact" element={<Contact />} />
          {/* Business Verticals */}
          <Route path="/business/industrial" element={<IndustrialPark />} />
          <Route path="/business/industrial/chhattisgarh" element={<ChhattisgarhIndustrialPark />} />
          <Route path="/business/industrial/odisha" element={<OdishaPharmaCity />} />
          <Route path="/business/industrial/hindupur" element={<HindupurIndustrialPark />} />
          <Route path="/business/paper" element={<PulpPaper />} />
          <Route path="/business/paper/bayyavaram" element={<BayyavaramPaperMill />} />
          <Route path="/business/pulp/assam-agroforestry" element={<AssamAgroforestryProject />} />
          <Route path="/business/paper/konta" element={<KontaPaperMill />} />
          <Route path="/business/power" element={<PowerInfrastructure />} />
          {/* Main Pages */}
          <Route path="/projects" element={<Projects />} />
          {/* <Route path="/clients" element={<Clients />} /> */}
          <Route path="/investors" element={<Investors />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/news" element={<News />} />
          {/* Placeholder routes for future subpages */}
          <Route path="/projects/*" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-2xl">Project Details - Coming Soon</h1></div>} />
          <Route path="/business/power/*" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-2xl">Power Subpage - Coming Soon</h1></div>} />
          <Route path="/privacy" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-2xl">Privacy Policy - Coming Soon</h1></div>} />
          <Route path="/terms" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-2xl">Terms of Service - Coming Soon</h1></div>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
