import { useState, useEffect } from "react";
import { Filter, Search, SlidersHorizontal } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CafeCard from "@/components/CafeCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cafes } from "@/data/cafes";
import { useSearchParams } from "react-router-dom";
const Cafeterias = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [locationFilter, setLocationFilter] = useState("all");
  const [ratingFilter, setRatingFilter] = useState("all");
  const [grecaFilter, setGrecaFilter] = useState("all");
  const [searchParams] = useSearchParams();
  useEffect(() => {
    const q = searchParams.get("q") || "";
    setSearchQuery(q);
  }, [searchParams]);
  const locations = ["all", ...new Set(cafes.map(cafe => cafe.location))];
  const filteredCafes = cafes.filter(cafe => {
    const matchesSearch = cafe.name.toLowerCase().includes(searchQuery.toLowerCase()) || cafe.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLocation = locationFilter === "all" || cafe.location === locationFilter;
    const matchesRating = ratingFilter === "all" || ratingFilter === "3.5+" && cafe.rating >= 3.5 || ratingFilter === "4+" && cafe.rating >= 4 || ratingFilter === "4.5+" && cafe.rating >= 4.5;
    const matchesGreca = grecaFilter === "all" || grecaFilter === "true" && cafe.hasGreca || grecaFilter === "false" && !cafe.hasGreca;
    return matchesSearch && matchesLocation && matchesRating && matchesGreca;
  }).sort((a, b) => b.rating - a.rating);
  return <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero */}
      <section className="py-16 bg-gradient-warm text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold font-serif mb-6 text-orange-900">
            Todas las Cafeterías
          </h1>
          <p className="text-xl max-w-2xl mx-auto text-accent font-medium">
            Explora nuestra selección completa de cafeterías evaluadas
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-secondary border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input type="text" placeholder="Buscar por nombre o ubicación..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="pl-10" />
            </div>

            <div className="flex flex-wrap gap-3 w-full md:w-auto">
              <Select value={locationFilter} onValueChange={setLocationFilter}>
                <SelectTrigger className="w-full md:w-[200px]">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Ubicación" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todas las ubicaciones</SelectItem>
                  {locations.slice(1).map(location => <SelectItem key={location} value={location}>
                      {location}
                    </SelectItem>)}
                </SelectContent>
              </Select>

              <Select value={ratingFilter} onValueChange={setRatingFilter}>
                <SelectTrigger className="w-full md:w-[180px]">
                  <SlidersHorizontal className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Calificación" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todas</SelectItem>
                  <SelectItem value="3.5+">3.5★ o más</SelectItem>
                  <SelectItem value="4+">4★ o más</SelectItem>
                  <SelectItem value="4.5+">4.5★ o más</SelectItem>
                </SelectContent>
              </Select>

              <Select value={grecaFilter} onValueChange={setGrecaFilter}>
                <SelectTrigger className="w-full md:w-[180px]">
                  <SelectValue placeholder="Reconocimiento Greca COLAO" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todas</SelectItem>
                  <SelectItem value="true">Con Greca COLAO</SelectItem>
                  <SelectItem value="false">Sin Greca COLAO</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="mt-4 text-sm text-muted-foreground">
            Mostrando {filteredCafes.length} de {cafes.length} cafeterías
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-12 bg-background flex-1">
        <div className="container mx-auto px-4">
          {filteredCafes.length > 0 ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCafes.map(cafe => <CafeCard key={cafe.id} cafe={cafe} />)}
            </div> : <div className="text-center py-16">
              <p className="text-xl text-muted-foreground mb-4">
                No se encontraron cafeterías con los filtros seleccionados
              </p>
              <Button variant="outline" onClick={() => {
            setSearchQuery("");
            setLocationFilter("all");
            setRatingFilter("all");
            setGrecaFilter("all");
          }}>
                Limpiar filtros
              </Button>
            </div>}
        </div>
      </section>

      <Footer />
    </div>;
};
export default Cafeterias;