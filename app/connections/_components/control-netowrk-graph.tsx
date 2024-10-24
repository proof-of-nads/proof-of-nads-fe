"use client";

import { FC, CSSProperties } from "react";

import {
  SigmaContainer,
  ControlsContainer,
  ZoomControl,
  SearchControl,
  FullScreenControl,
} from "@react-sigma/core";
import "@react-sigma/core/lib/react-sigma.min.css";

import { SampleGraph } from "./sample-graph";
import { LayoutsControl } from "./layout-control";

export const ControlNetworkGraph: FC<{ style?: CSSProperties }> = ({
  style,
}) => {
  return (
    <SigmaContainer
      // className="w-[900px] h-[900px]"
      style={{
        width: "900px",
        height: "900px",
        backgroundColor: "transparent",
      }}
      settings={{ allowInvalidContainer: true }}
    >
      <SampleGraph />
      <ControlsContainer position={"bottom-right"}>
        <ZoomControl />
        <FullScreenControl />
        <LayoutsControl />
      </ControlsContainer>
      <ControlsContainer position={"top-right"}>
        <SearchControl style={{ width: "200px" }} />
      </ControlsContainer>
    </SigmaContainer>
  );
};
