import data from "./template.json" assert { type: "json" };


export type Template = {
name: string | undefined;
cover: string | undefined;
slug: string;
title: string;
category: string;
price: number;
tags: string[];
thumb: string;
gallery: string[];
description: string;
recommended?: string[];
};


export const templates = data as Template[];


export function bySlug(slug: string) {
return templates.find((t) => t.slug === slug);
}