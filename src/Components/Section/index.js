import React from "react";
import css from './section.module.css'

export default function Section({ title, subtitle, id }) {
  return (
    <div className={css.section} >
      <div className={css.sectioncontent} id={id}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}
