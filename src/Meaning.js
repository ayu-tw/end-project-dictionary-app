import React from "react";
import Synonyms from "./Synonyms";
import "./Dictionary.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definitions, index) {
        return (
          <div key={index}>
            <p className="defintionPlusExample">
              <span>
                <em className="definition">defintion</em> : {""}
              </span>
              {definitions.definition}
              <br />
              <span>
                <em className="example">example</em> : {""}
              </span>
              {definitions.example}
              <br />
              <Synonyms synonyms={definitions.synonyms} />
            </p>
          </div>
        );
      })}
    </div>
  );
}
