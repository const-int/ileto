/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef } from "react";
import useFontSize from "./useFontSize";
import useStyles from "./useStyles";
import TriangleIcon from "../Currency/ChevronIcon";

function Chart({ sourceCurrency, targetCurrency, sourceValue, targetValue }) {
  const sourceValueContainerEl = useRef(null);
  const sourceValueEl = useRef(null);
  const sourceValueFontSize = useFontSize(
    sourceValue,
    sourceValueEl,
    sourceValueContainerEl
  );
  const targetValueContainerEl = useRef(null);
  const targetValueEl = useRef(null);
  const targetValueFontSize = useFontSize(
    targetValue,
    targetValueEl,
    targetValueContainerEl
  );
  const classes = useStyles({ sourceValueFontSize, targetValueFontSize });

  return (
    <div className={classes.root}>
      <div className={classes.source}>
        <div className={classes.currencyLabel}>
          <div className={classes.currencyCode}>
            <span>{sourceCurrency.code}</span>

            <TriangleIcon />
          </div>
          <div className={classes.currencyName}>
            {sourceCurrency.shortName || sourceCurrency.name}
          </div>
        </div>

        <div
          ref={sourceValueContainerEl}
          className={classes.sourceValueContainer}
        >
          <div ref={sourceValueEl} className={classes.sourceValue}>
            {sourceValue}
          </div>
          <div className={classes.sourceCursor} />
        </div>
      </div>

      <div className={classes.target}>
        <div className={classes.currencyLabel}>
          <div className={classes.currencyCode}>
            <span>{targetCurrency.code}</span>

            <TriangleIcon />
          </div>
          <div className={classes.currencyName}>
            {targetCurrency.shortName || targetCurrency.name}
          </div>
        </div>

        <div
          ref={targetValueContainerEl}
          className={classes.targetValueContainer}
        >
          <div ref={targetValueEl} className={classes.targetValue}>
            {targetValue}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chart;
