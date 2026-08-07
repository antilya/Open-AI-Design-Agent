"use client";

import React from "react";
import CreativeCanvas from "./CreativeCanvas";

const PROVIDER_ASSET_ORIGIN = "https://cdn.muapi.ai/";

function resolveProviderAssetUrl(assetKey) {
  return new URL(String(assetKey).replace(/^\/+/, ""), PROVIDER_ASSET_ORIGIN).href;
}

export default function ProviderCreativeCanvas({
  resolveAssetUrl = resolveProviderAssetUrl,
  ...props
}) {
  return <CreativeCanvas {...props} resolveAssetUrl={resolveAssetUrl} />;
}
