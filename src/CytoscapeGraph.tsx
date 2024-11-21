// src/components/CytoscapeGraph.tsx
import React, { useEffect, useRef } from "react";
import cytoscape, { Core } from "cytoscape";

interface CytoscapeGraphProps {
  elements: cytoscape.ElementDefinition[] | cytoscape.ElementsDefinition;
  style: cytoscape.Stylesheet[];
}

export const CytoscapeGraph: React.FC<CytoscapeGraphProps> = ({
  elements,
  style,
}) => {
  const cyRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (cyRef.current) {
      const cy: Core = cytoscape({
        container: cyRef.current,
        elements,
        style,
      });

      return () => cy.destroy();
    }
  }, [elements, style]);

  return <div ref={cyRef} style={{ width: "100%", height: "400px" }} />;
};
