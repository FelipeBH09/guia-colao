import { useMemo } from "react";
import Fuse from "fuse.js";
import { CafeData } from "@/components/CafeCard";

export const useFuzzySearch = (data: CafeData[], query: string) => {
  const fuse = useMemo(() => {
    const options = {
      keys: [
        { name: "name", weight: 2 },
        { name: "location", weight: 1.5 },
        { name: "description", weight: 0.5 }
      ],
      threshold: 0.4, // Tolerancia a errores (0 = exacto, 1 = muy flexible)
      ignoreLocation: true,
      minMatchCharLength: 2,
      distance: 100,
      useExtendedSearch: true
    };
    return new Fuse(data, options);
  }, [data]);

  const results = useMemo(() => {
    if (!query.trim()) {
      return data;
    }

    // Realizar búsqueda fuzzy
    const fuzzyResults = fuse.search(query);
    return fuzzyResults.map(result => result.item);
  }, [fuse, query, data]);

  return results;
};
