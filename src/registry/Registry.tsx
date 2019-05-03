/** @jsx jsx */

import React from "react";
import useDimensions from "react-use-dimensions";
import { Portal } from "react-portal";

import { jsx } from "@emotion/core";

import * as BaseComponents from "./Components";
import FancyHeadingComponent from "./builtins/blocks/FancyHeading";
import Bold from "./builtins/inlines/Bold";
import { BlockLabel } from "../components/BlockLabel";
import { BlockPlaceholder } from "../components/BlockPlaceholder";
import { BlockPicker } from "../components/BlockPicker";
import Highlight from "./builtins/inlines/Highlight";
import Glitter from "./builtins/inlines/Glitter";
import { inlines, blocks } from "./data";
import Link from "./builtins/inlines/Link";

export function registerBlock({
  title,
  description,
  screenshot,
  category,
  placeholder,
  Component,
  editableProps,
  defaultProps = {},
  id
}) {
  if (defaultProps && Component) {
    Component.defaultProps = {
      ...defaultProps,
      ...(Component.defaultProps || {})
    };
  }

  blocks[id] = {
    title,
    description,
    screenshot,
    category,
    placeholder,
    Component,
    editableProps,
    defaultProps,
    id
  };
}

export function registerInline({
  title,
  description,
  screenshot,
  placeholder,
  category,
  Component,
  editableProps = {},
  defaultProps = {},
  id
}) {
  if (defaultProps && Component) {
    Component.defaultProps = {
      ...defaultProps,
      ...(Component.defaultProps || {})
    };
  }

  inlines[id] = {
    title,
    description,
    screenshot,
    placeholder,
    Component,
    category,
    id,
    editableProps,
    defaultProps
  };
}

export function InlineComponent({
  componentName,
  props,
  attributes,
  children,
  isFocused,
  isSelected
}) {
  const inline = inlines[componentName] || { Component: "span" };
  const { Component } = inline;

  return (
    <span
      data-component-category={inline.category}
      data-component-name={componentName}
      {...attributes}
    >
      {jsx(Component, props, children)}
    </span>
  );
}

export function BlockComponent({
  componentName,
  showPlaceholder,
  attributes,
  children,
  selectedNode,
  props,
  isFocused,
  showMenu,
  blockPickerRef,
  onToggleMenu,
  onSelectMenuItem
}) {
  const block = blocks[componentName] || { Component: "div" };
  const { Component } = block;
  const [ref, { x, y, width, height }] = useDimensions();

  return (
    <div
      data-component-category={block.category}
      data-component-name={componentName}
      {...attributes}
    >
      <Portal node={document && document.getElementById("editor-gutter-node")}>
        <BlockLabel
          onToggleMenu={onToggleMenu}
          y={y}
          x={x}
          height={height}
          width={width}
          isFocused={isFocused}
          isSelected={showMenu}
        />
        {typeof block.placeholder !== "undefined" && showPlaceholder && (
          <BlockPlaceholder
            BlockComponent={Component}
            width={width}
            height={height}
            y={y}
            x={x}
          >
            {showMenu ? "What're you looking for?" : block.placeholder}
          </BlockPlaceholder>
        )}
        {showMenu && (
          <BlockPicker
            onSelect={onSelectMenuItem}
            value={componentName}
            x={x}
            ref={blockPickerRef}
            y={y}
            height={height}
          />
        )}
      </Portal>

      {jsx(Component, { ...props, ref }, children)}
    </div>
  );
}

Object.keys(BaseComponents.Blocks).forEach(block => {
  registerBlock(BaseComponents.Blocks[block]);
});

registerInline(Bold);
registerInline(Glitter);
registerInline(Highlight);
registerInline(Link);
