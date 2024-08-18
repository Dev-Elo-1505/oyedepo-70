import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import quotes from "../contents/quoteContent";
import { IconType } from "react-icons";
import React from "react";

const QuotesPage = () => {
  return (
    <section className="p-8 lg:px-28 lg:py-4">
      <h1 className="text-2xl text-red-500 font-semibold mb-2">QUOTES</h1>
      <div>
        <p className="text-slate-800 leading-8 text-justify">
          Some words of wisdom from Bishop David Oyedepo
        </p>
      </div>
      <div className="mt-12">
        <VerticalTimeline>
          {quotes.map((quote) => (
            <VerticalTimelineElement icon={React.createElement(quote.iconUrl as IconType, { className: "text-2xl" })} key={quote.id}>
              <div><p className="text-slate-800 font-xl font-semibold">{quote.content}</p></div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default QuotesPage;
