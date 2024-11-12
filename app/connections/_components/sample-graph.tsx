import { FC, useCallback, useEffect, useState } from "react";

import {
  useSigma,
  useRegisterEvents,
  useLoadGraph,
  useSetSettings,
} from "@react-sigma/core";
import { useLayoutCircular } from "@react-sigma/layout-circular";
import { useRandom, NodeType, EdgeType } from "./useRandom";
import Graph, { MultiDirectedGraph } from "graphology";
import { Attributes } from "graphology-types";

export const SampleGraph: FC<{ disableHoverEffect?: boolean }> = ({
  disableHoverEffect,
}) => {
  const { randomGraph } = useRandom();
  const sigma = useSigma<NodeType, EdgeType>();
  const registerEvents = useRegisterEvents<NodeType, EdgeType>();
  const setSettings = useSetSettings<NodeType, EdgeType>();
  const loadGraph = useLoadGraph<NodeType, EdgeType>();
  const { assign: assignCircular } = useLayoutCircular();
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  /**
   * When component mount
   * => load the graph
   */

  // Function to create the graph with positions
  const randomColor = useCallback(() => {
    const digits = "0123456789abcdef";
    let code = "#";
    for (let i = 0; i < 6; i++) {
      code += digits.charAt(Math.floor(Math.random() * 16));
    }
    return code;
  }, []);

  useEffect(() => {
    // Create & load the graph
    const createGraph = () => {
      const graph = new MultiDirectedGraph();

      // Add nodes and assign default positions
      const uniqueNodes = new Set();
      sampleEdges.forEach(({ source, target }) => {
        uniqueNodes.add(source);
        uniqueNodes.add(target);
      });

      let angle = 0;
      const radius = 100; // Customize the radius if needed
      uniqueNodes.forEach((node) => {
        if (!graph.hasNode(node)) {
          // Set default (x, y) positions in a circular pattern
          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);
          graph.addNode(node, {
            label: node,
            size: 10,
            x,
            y,
            color: randomColor(),
          });
          angle += (2 * Math.PI) / uniqueNodes.size;
        }
      });

      // Add edges
      sampleEdges.forEach(({ key, source, target }) => {
        if (!graph.hasEdge(source, target)) {
          graph.addEdgeWithKey(key, source, target);
        }
      });

      return graph;
    };

    const graph = createGraph();

    loadGraph(graph as unknown as Graph<NodeType, EdgeType, Attributes>);
    assignCircular();

    // Register the events
    registerEvents({
      enterNode: (event) => setHoveredNode(event.node),
      leaveNode: () => setHoveredNode(null),
    });
  }, [assignCircular, loadGraph, registerEvents, randomGraph, randomColor]);

  /**
   * When component mount or hovered node change
   * => Setting the sigma reducers
   */
  useEffect(() => {
    setSettings({
      nodeReducer: (node, data) => {
        const graph = sigma.getGraph();
        const newData = { ...data, highlighted: data.highlighted || false };

        if (!disableHoverEffect && hoveredNode) {
          if (
            node === hoveredNode ||
            graph.neighbors(hoveredNode).includes(node)
          ) {
            newData.highlighted = true;
          } else {
            newData.color = "#E2E2E2";
            newData.highlighted = false;
          }
        }
        return newData;
      },
      edgeReducer: (edge, data) => {
        const graph = sigma.getGraph();
        const newData = { ...data, hidden: false };

        if (
          !disableHoverEffect &&
          hoveredNode &&
          !graph.extremities(edge).includes(hoveredNode)
        ) {
          newData.hidden = true;
        }
        return newData;
      },
    });
  }, [hoveredNode, setSettings, sigma, disableHoverEffect]);

  return null;
};

const sampleEdges = [
  {
    key: "edge_Jinie_baeksu",
    source: "baeksu",
    target: "Jinie",
  },
  {
    key: "edge_baeksu_mingming",
    source: "baeksu",
    target: "mingming",
  },
  {
    key: "edge_PaulC_baeksu",
    source: "baeksu",
    target: "PaulC",
  },
  {
    key: "edge_This is Fin_baeksu",
    source: "baeksu",
    target: "This is Fin",
  },
  {
    key: "edge_Claire_baeksu",
    source: "baeksu",
    target: "Claire",
  },
  {
    key: "edge_baeksu_boba",
    source: "baeksu",
    target: "boba",
  },
  {
    key: "edge_baeksu_endgame",
    source: "baeksu",
    target: "endgame",
  },
  {
    key: "edge_Keone_baeksu",
    source: "baeksu",
    target: "Keone",
  },
  {
    key: "edge_Ssick_baeksu",
    source: "baeksu",
    target: "Ssick",
  },
  {
    key: "edge_baeksu_overcome",
    source: "baeksu",
    target: "overcome",
  },
  {
    key: "edge_ShimMoney_baeksu",
    source: "baeksu",
    target: "ShimMoney",
  },
  {
    key: "edge_baeksu_buja",
    source: "baeksu",
    target: "buja",
  },
  {
    key: "edge_baeksu_juju5378",
    source: "baeksu",
    target: "juju5378",
  },
  {
    key: "edge_Shuwski_baeksu",
    source: "baeksu",
    target: "Shuwski",
  },
  {
    key: "edge_PingPing_baeksu",
    source: "baeksu",
    target: "PingPing",
  },
  {
    key: "edge_baeksu_ozzy",
    source: "baeksu",
    target: "ozzy",
  },
  {
    key: "edge_Ketama_baeksu",
    source: "baeksu",
    target: "Ketama",
  },
  {
    key: "edge_baeksu_berzan",
    source: "baeksu",
    target: "berzan",
  },
  {
    key: "edge_Grimjow_baeksu",
    source: "baeksu",
    target: "Grimjow",
  },
  {
    key: "edge_baeksu_bakba",
    source: "baeksu",
    target: "bakba",
  },
  {
    key: "edge_Blaker_baeksu",
    source: "baeksu",
    target: "Blaker",
  },
  {
    key: "edge_BenjaNad_baeksu",
    source: "baeksu",
    target: "BenjaNad",
  },
  {
    key: "edge_baeksu_whitesocks",
    source: "baeksu",
    target: "whitesocks",
  },
  {
    key: "edge_baeksu_momoflisa",
    source: "baeksu",
    target: "momoflisa",
  },
  {
    key: "edge_Blaker_Jinie",
    source: "Jinie",
    target: "Blaker",
  },
  {
    key: "edge_Jinie_whitesocks",
    source: "Jinie",
    target: "whitesocks",
  },
  {
    key: "edge_Jinie_mingming",
    source: "Jinie",
    target: "mingming",
  },
  {
    key: "edge_BenjaNad_Jinie",
    source: "Jinie",
    target: "BenjaNad",
  },
  {
    key: "edge_Jinie_bakba",
    source: "Jinie",
    target: "bakba",
  },
  {
    key: "edge_Jinie_Ketama",
    source: "Jinie",
    target: "Ketama",
  },
  {
    key: "edge_Grimjow_Jinie",
    source: "Jinie",
    target: "Grimjow",
  },
  {
    key: "edge_Jinie_ShimMoney",
    source: "Jinie",
    target: "ShimMoney",
  },
  {
    key: "edge_Jinie_PaulC",
    source: "Jinie",
    target: "PaulC",
  },
  {
    key: "edge_mingming_whitesocks",
    source: "mingming",
    target: "whitesocks",
  },
  {
    key: "edge_bakba_mingming",
    source: "mingming",
    target: "bakba",
  },
  {
    key: "edge_Blaker_mingming",
    source: "mingming",
    target: "Blaker",
  },
  {
    key: "edge_endgame_mingming",
    source: "mingming",
    target: "endgame",
  },
  {
    key: "edge_Shuwski_mingming",
    source: "mingming",
    target: "Shuwski",
  },
  {
    key: "edge_ShimMoney_mingming",
    source: "mingming",
    target: "ShimMoney",
  },
  {
    key: "edge_Claire_mingming",
    source: "mingming",
    target: "Claire",
  },
  {
    key: "edge_buja_mingming",
    source: "mingming",
    target: "buja",
  },
  {
    key: "edge_PaulC_ShimMoney",
    source: "PaulC",
    target: "ShimMoney",
  },
  {
    key: "edge_Lavadong_PaulC",
    source: "PaulC",
    target: "Lavadong",
  },
  {
    key: "edge_HB_PaulC",
    source: "PaulC",
    target: "HB",
  },
  {
    key: "edge_PaulC_Seungjae",
    source: "PaulC",
    target: "Seungjae",
  },
  {
    key: "edge_PaulC_overcome",
    source: "PaulC",
    target: "overcome",
  },
  {
    key: "edge_PaulC_baram7",
    source: "PaulC",
    target: "baram7",
  },
  {
    key: "edge_Jeongnam_PaulC",
    source: "PaulC",
    target: "Jeongnam",
  },
  {
    key: "edge_PaulC_hojuun2",
    source: "PaulC",
    target: "hojuun2",
  },
  {
    key: "edge_Choonsik_PaulC",
    source: "PaulC",
    target: "Choonsik",
  },
  {
    key: "edge_PaulC_chamdom",
    source: "PaulC",
    target: "chamdom",
  },
  {
    key: "edge_PaulC_PolyMoly",
    source: "PaulC",
    target: "PolyMoly",
  },
  {
    key: "edge_PaulC_Ssick",
    source: "PaulC",
    target: "Ssick",
  },
  {
    key: "edge_This is Fin_momoflisa",
    source: "This is Fin",
    target: "momoflisa",
  },
  {
    key: "edge_Claire_PolyMoly",
    source: "Claire",
    target: "PolyMoly",
  },
  {
    key: "edge_Claire_endgame",
    source: "Claire",
    target: "endgame",
  },
  {
    key: "edge_Claire_PaulC",
    source: "Claire",
    target: "PaulC",
  },
  {
    key: "edge_Claire_whitesocks",
    source: "Claire",
    target: "whitesocks",
  },
  {
    key: "edge_Claire_momoflisa",
    source: "Claire",
    target: "momoflisa",
  },
  {
    key: "edge_Claire_HB",
    source: "Claire",
    target: "HB",
  },
  {
    key: "edge_BenjaNad_Claire",
    source: "Claire",
    target: "BenjaNad",
  },
  {
    key: "edge_Claire_Ssick",
    source: "Claire",
    target: "Ssick",
  },
  {
    key: "edge_Claire_Jeongnam",
    source: "Claire",
    target: "Jeongnam",
  },
  {
    key: "edge_Claire_This is Fin",
    source: "Claire",
    target: "This is Fin",
  },
  {
    key: "edge_Claire_Seungjae",
    source: "Claire",
    target: "Seungjae",
  },
  {
    key: "edge_Claire_baram7",
    source: "Claire",
    target: "baram7",
  },
  {
    key: "edge_Claire_hojuun2",
    source: "Claire",
    target: "hojuun2",
  },
  {
    key: "edge_Claire_buja",
    source: "Claire",
    target: "buja",
  },
  {
    key: "edge_Claire_Shuwski",
    source: "Claire",
    target: "Shuwski",
  },
  {
    key: "edge_Claire_overcome",
    source: "Claire",
    target: "overcome",
  },
  {
    key: "edge_Claire_chamdom",
    source: "Claire",
    target: "chamdom",
  },
  {
    key: "edge_Choonsik_Claire",
    source: "Claire",
    target: "Choonsik",
  },
  {
    key: "edge_Claire_Lavadong",
    source: "Claire",
    target: "Lavadong",
  },
  {
    key: "edge_boba_mingming",
    source: "boba",
    target: "mingming",
  },
  {
    key: "edge_boba_buja",
    source: "boba",
    target: "buja",
  },
  {
    key: "edge_Claire_boba",
    source: "boba",
    target: "Claire",
  },
  {
    key: "edge_berzan_boba",
    source: "boba",
    target: "berzan",
  },
  {
    key: "edge_boba_ozzy",
    source: "boba",
    target: "ozzy",
  },
  {
    key: "edge_boba_endgame",
    source: "boba",
    target: "endgame",
  },
  {
    key: "edge_Shuwski_boba",
    source: "boba",
    target: "Shuwski",
  },
  {
    key: "edge_Jeongnam_endgame",
    source: "endgame",
    target: "Jeongnam",
  },
  {
    key: "edge_endgame_hojuun2",
    source: "endgame",
    target: "hojuun2",
  },
  {
    key: "edge_Choonsik_endgame",
    source: "endgame",
    target: "Choonsik",
  },
  {
    key: "edge_endgame_whitesocks",
    source: "endgame",
    target: "whitesocks",
  },
  {
    key: "edge_baram7_endgame",
    source: "endgame",
    target: "baram7",
  },
  {
    key: "edge_Shuwski_endgame",
    source: "endgame",
    target: "Shuwski",
  },
  {
    key: "edge_PolyMoly_endgame",
    source: "endgame",
    target: "PolyMoly",
  },
  {
    key: "edge_Seungjae_endgame",
    source: "endgame",
    target: "Seungjae",
  },
  {
    key: "edge_PaulC_endgame",
    source: "endgame",
    target: "PaulC",
  },
  {
    key: "edge_endgame_overcome",
    source: "endgame",
    target: "overcome",
  },
  {
    key: "edge_HB_endgame",
    source: "endgame",
    target: "HB",
  },
  {
    key: "edge_chamdom_endgame",
    source: "endgame",
    target: "chamdom",
  },
  {
    key: "edge_Lavadong_endgame",
    source: "endgame",
    target: "Lavadong",
  },
  {
    key: "edge_buja_endgame",
    source: "endgame",
    target: "buja",
  },
  {
    key: "edge_Ssick_endgame",
    source: "endgame",
    target: "Ssick",
  },
  {
    key: "edge_Ssick_overcome",
    source: "Ssick",
    target: "overcome",
  },
  {
    key: "edge_Choonsik_Ssick",
    source: "Ssick",
    target: "Choonsik",
  },
  {
    key: "edge_HB_Ssick",
    source: "Ssick",
    target: "HB",
  },
  {
    key: "edge_Seungjae_Ssick",
    source: "Ssick",
    target: "Seungjae",
  },
  {
    key: "edge_Ssick_baram7",
    source: "Ssick",
    target: "baram7",
  },
  {
    key: "edge_Lavadong_Ssick",
    source: "Ssick",
    target: "Lavadong",
  },
  {
    key: "edge_Ssick_chamdom",
    source: "Ssick",
    target: "chamdom",
  },
  {
    key: "edge_PolyMoly_Ssick",
    source: "Ssick",
    target: "PolyMoly",
  },
  {
    key: "edge_Jeongnam_Ssick",
    source: "Ssick",
    target: "Jeongnam",
  },
  {
    key: "edge_Keone_Ssick",
    source: "Ssick",
    target: "Keone",
  },
  {
    key: "edge_Ssick_hojuun2",
    source: "Ssick",
    target: "hojuun2",
  },
  {
    key: "edge_baram7_overcome",
    source: "overcome",
    target: "baram7",
  },
  {
    key: "edge_Seungjae_overcome",
    source: "overcome",
    target: "Seungjae",
  },
  {
    key: "edge_hojuun2_overcome",
    source: "overcome",
    target: "hojuun2",
  },
  {
    key: "edge_momoflisa_overcome",
    source: "overcome",
    target: "momoflisa",
  },
  {
    key: "edge_This is Fin_overcome",
    source: "overcome",
    target: "This is Fin",
  },
  {
    key: "edge_chamdom_overcome",
    source: "overcome",
    target: "chamdom",
  },
  {
    key: "edge_Choonsik_overcome",
    source: "overcome",
    target: "Choonsik",
  },
  {
    key: "edge_PolyMoly_overcome",
    source: "overcome",
    target: "PolyMoly",
  },
  {
    key: "edge_Lavadong_overcome",
    source: "overcome",
    target: "Lavadong",
  },
  {
    key: "edge_Jeongnam_overcome",
    source: "overcome",
    target: "Jeongnam",
  },
  {
    key: "edge_HB_overcome",
    source: "overcome",
    target: "HB",
  },
  {
    key: "edge_ShimMoney_bakba",
    source: "ShimMoney",
    target: "bakba",
  },
  {
    key: "edge_Blaker_ShimMoney",
    source: "ShimMoney",
    target: "Blaker",
  },
  {
    key: "edge_HB_buja",
    source: "buja",
    target: "HB",
  },
  {
    key: "edge_baram7_buja",
    source: "buja",
    target: "baram7",
  },
  {
    key: "edge_buja_chamdom",
    source: "buja",
    target: "chamdom",
  },
  {
    key: "edge_PaulC_buja",
    source: "buja",
    target: "PaulC",
  },
  {
    key: "edge_Seungjae_buja",
    source: "buja",
    target: "Seungjae",
  },
  {
    key: "edge_buja_hojuun2",
    source: "buja",
    target: "hojuun2",
  },
  {
    key: "edge_Jeongnam_buja",
    source: "buja",
    target: "Jeongnam",
  },
  {
    key: "edge_Lavadong_buja",
    source: "buja",
    target: "Lavadong",
  },
  {
    key: "edge_Choonsik_buja",
    source: "buja",
    target: "Choonsik",
  },
  {
    key: "edge_Ssick_buja",
    source: "buja",
    target: "Ssick",
  },
  {
    key: "edge_PolyMoly_buja",
    source: "buja",
    target: "PolyMoly",
  },
  {
    key: "edge_buja_overcome",
    source: "buja",
    target: "overcome",
  },
  {
    key: "edge_buja_whitesocks",
    source: "buja",
    target: "whitesocks",
  },
  {
    key: "edge_Shuwski_buja",
    source: "buja",
    target: "Shuwski",
  },
  {
    key: "edge_Ssick_juju5378",
    source: "juju5378",
    target: "Ssick",
  },
  {
    key: "edge_Keone_juju5378",
    source: "juju5378",
    target: "Keone",
  },
  {
    key: "edge_PingPing_mingming",
    source: "PingPing",
    target: "mingming",
  },
  {
    key: "edge_PingPing_endgame",
    source: "PingPing",
    target: "endgame",
  },
  {
    key: "edge_PingPing_buja",
    source: "PingPing",
    target: "buja",
  },
  {
    key: "edge_PingPing_berzan",
    source: "PingPing",
    target: "berzan",
  },
  {
    key: "edge_PingPing_Shuwski",
    source: "PingPing",
    target: "Shuwski",
  },
  {
    key: "edge_PingPing_boba",
    source: "PingPing",
    target: "boba",
  },
  {
    key: "edge_PingPing_ozzy",
    source: "PingPing",
    target: "ozzy",
  },
  {
    key: "edge_Claire_PingPing",
    source: "PingPing",
    target: "Claire",
  },
  {
    key: "edge_Claire_ozzy",
    source: "ozzy",
    target: "Claire",
  },
  {
    key: "edge_berzan_ozzy",
    source: "ozzy",
    target: "berzan",
  },
  {
    key: "edge_Shuwski_ozzy",
    source: "ozzy",
    target: "Shuwski",
  },
  {
    key: "edge_endgame_ozzy",
    source: "ozzy",
    target: "endgame",
  },
  {
    key: "edge_mingming_ozzy",
    source: "ozzy",
    target: "mingming",
  },
  {
    key: "edge_buja_ozzy",
    source: "ozzy",
    target: "buja",
  },
  {
    key: "edge_This is Fin_berzan",
    source: "berzan",
    target: "This is Fin",
  },
  {
    key: "edge_berzan_endgame",
    source: "berzan",
    target: "endgame",
  },
  {
    key: "edge_Shuwski_berzan",
    source: "berzan",
    target: "Shuwski",
  },
  {
    key: "edge_berzan_mingming",
    source: "berzan",
    target: "mingming",
  },
  {
    key: "edge_berzan_overcome",
    source: "berzan",
    target: "overcome",
  },
  {
    key: "edge_berzan_buja",
    source: "berzan",
    target: "buja",
  },
  {
    key: "edge_berzan_momoflisa",
    source: "berzan",
    target: "momoflisa",
  },
  {
    key: "edge_BenjaNad_berzan",
    source: "berzan",
    target: "BenjaNad",
  },
  {
    key: "edge_Claire_berzan",
    source: "berzan",
    target: "Claire",
  },
  {
    key: "edge_Grimjow_Ketama",
    source: "Grimjow",
    target: "Ketama",
  },
  {
    key: "edge_BenjaNad_Grimjow",
    source: "Grimjow",
    target: "BenjaNad",
  },
  {
    key: "edge_Blaker_bakba",
    source: "bakba",
    target: "Blaker",
  },
  {
    key: "edge_BenjaNad_momoflisa",
    source: "BenjaNad",
    target: "momoflisa",
  },
  {
    key: "edge_BenjaNad_overcome",
    source: "BenjaNad",
    target: "overcome",
  },
  {
    key: "edge_BenjaNad_This is Fin",
    source: "BenjaNad",
    target: "This is Fin",
  },
  {
    key: "edge_BenjaNad_Ketama",
    source: "BenjaNad",
    target: "Ketama",
  },
  {
    key: "edge_HB_whitesocks",
    source: "whitesocks",
    target: "HB",
  },
  {
    key: "edge_Ssick_whitesocks",
    source: "whitesocks",
    target: "Ssick",
  },
  {
    key: "edge_Choonsik_whitesocks",
    source: "whitesocks",
    target: "Choonsik",
  },
  {
    key: "edge_Seungjae_whitesocks",
    source: "whitesocks",
    target: "Seungjae",
  },
  {
    key: "edge_Jeongnam_whitesocks",
    source: "whitesocks",
    target: "Jeongnam",
  },
  {
    key: "edge_PolyMoly_whitesocks",
    source: "whitesocks",
    target: "PolyMoly",
  },
  {
    key: "edge_PaulC_whitesocks",
    source: "whitesocks",
    target: "PaulC",
  },
  {
    key: "edge_chamdom_whitesocks",
    source: "whitesocks",
    target: "chamdom",
  },
  {
    key: "edge_overcome_whitesocks",
    source: "whitesocks",
    target: "overcome",
  },
  {
    key: "edge_baram7_whitesocks",
    source: "whitesocks",
    target: "baram7",
  },
  {
    key: "edge_hojuun2_whitesocks",
    source: "whitesocks",
    target: "hojuun2",
  },
  {
    key: "edge_ShimMoney_whitesocks",
    source: "whitesocks",
    target: "ShimMoney",
  },
  {
    key: "edge_Lavadong_whitesocks",
    source: "whitesocks",
    target: "Lavadong",
  },
];
