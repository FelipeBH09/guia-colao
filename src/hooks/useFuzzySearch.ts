import { useMemo } from "react";
import Fuse from "fuse.js";
import { CafeData } from "@/components/CafeCard";

export const useFuzzySearch = (data: CafeData[], query: string) => {
  // Normalizar texto removiendo acentos y convirtiendo a minúsculas
  const normalizeText = (text: string) => {
    return text
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  };

  const normalizedData = useMemo(() => {
    return data.map(item => ({
      ...item,
      normalizedName: normalizeText(item.name),
      normalizedLocation: normalizeText(item.location),
      normalizedDescription: normalizeText(item.description || "")
    }));
  }, [data]);

  const fuse = useMemo(() => {
    const options = {
      keys: [
        { name: "normalizedName", weight: 3 },
        { name: "normalizedLocation", weight: 2 },
        { name: "normalizedDescription", weight: 0.3 }
      ],
      threshold: 0.5,
      ignoreLocation: true,
      minMatchCharLength: 1,
      distance: 200,
      useExtendedSearch: false,
      shouldSort: true,
      includeScore: true,
      findAllMatches: true,
      ignoreFieldNorm: false,
      fieldNormWeight: 0.5
    };
    return new Fuse(normalizedData, options);
  }, [normalizedData]);

  const results = useMemo(() => {
    if (!query.trim()) {
      return data;
    }

    // Normalizar la consulta también
    const normalizedQuery = normalizeText(query);

    // Realizar búsqueda fuzzy
    const fuzzyResults = fuse.search(normalizedQuery);
    
    // Devolver los items originales (sin normalización)
    return fuzzyResults.map(result => {
      const originalItem = data.find(item => item.id === result.item.id);
      return originalItem!;
    });
  }, [fuse, query, data]);

  return results;
};
