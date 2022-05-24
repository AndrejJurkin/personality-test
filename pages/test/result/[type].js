import React from "react";
import Nav from "../../../components/Nav/Nav";
import {
  extrovertDescription,
  introvertDescription,
} from "../../../data/descriptions";

export default function ResultPage({ title, description }) {
  return (
    <div className="overflow-x-hidden bg-white">
      <Nav dark showDivider offsetTop />
      <main className="overflow-hidden pt-12 text-center">
        <section className="section-padding mx-auto max-w-3xl text-left text-slate-800">
          <h1 className="mb-4 font-display text-2xl">{title}</h1>
          <p>{description}</p>
        </section>
      </main>
    </div>
  );
}

export function getStaticProps(context) {
  const { type } = context.params;
  return {
    props: {
      type,
      title: getTitle(type),
      description: getDescription(type),
    },
  };
}

export function getStaticPaths() {
  return {
    paths: [
      { params: { type: "introvert" } },
      { params: { type: "extrovert" } },
    ],
    fallback: false,
  };
}

function getTitle(type) {
  switch (type) {
    case "introvert":
      return "Result: You are an Introvert";
    case "extrovert":
      return "Result: You are an Extrovert";
    default:
      return "Unknown";
  }
}

function getDescription(type) {
  switch (type) {
    case "introvert":
      return introvertDescription;
    case "extrovert":
      return extrovertDescription;
    default:
      return "Unknown";
  }
}
