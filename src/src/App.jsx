import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import ConstructionLoans from "./pages/services/ConstructionLoans";
import PermanentMortgages from "./pages/services/PermanentMortgages";
import Refinancing from "./pages/services/Refinancing";
import AcqRenovation from "./pages/services/AcqRenovation";
import RetailFinancing from "./pages/services/RetailFinancing";
import OfficeFinancing from "./pages/services/OfficeFinancing";
import About from "./pages/About";
import Transactions from "./pages/Transactions";
import LenderProgram from "./pages/LenderProgram";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/construction-loans" element={<ConstructionLoans />} />
      <Route path="/services/permanent-mortgages" element={<PermanentMortgages />} />
      <Route path="/services/commercial-real-estate-refinancing" element={<Refinancing />} />
      <Route path="/services/acquisition-and-renovation-financing" element={<AcqRenovation />} />
      <Route path="/services/retail-property-financing" element={<RetailFinancing />} />
      <Route path="/services/office-building-financing" element={<OfficeFinancing />} />
      <Route path="/about" element={<About />} />
      <Route path="/transactions" element={<Transactions />} />
      <Route path="/lender-program" element={<LenderProgram />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
