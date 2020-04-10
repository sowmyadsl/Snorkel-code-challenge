import React from "react";
import "./styles.css";
import { string, shape, arrayOf } from "prop-types";

export default function DataViewer(props) {
  const { sentences } = props;
  return (
    <div className="sentences-list">
      <ul>
        {sentences.map(sentence => (
          <li className="sentence" key={sentence.id}>
            {sentence.data}
          </li>
        ))}
      </ul>
    </div>
  );
}

DataViewer.propTypes = {
  sentences: arrayOf(
    shape({
      id: string,
      data: string
    })
  ).isRequired
};
