import React, { useState } from "react";
import propTypes from "prop-types";

export default function Stepper(props) {
  const { steps, initialStep } = props;
  const stepKeys = Object.keys(steps);

  const [CurrentStep, setCurrentstep] = useState(
    stepKeys.indexOf(initialStep) > -1 ? initialStep : stepKeys[0]
  );
  const totalStep = stepsKeys.length;
  const indexStep = stepsKeys.indexOf(CurrentStep);

  function prevStep() {
    if (+indexStep > 0) setCurrentstep(stepKeys[indexStep - 1]);
  }

  function nextStep() {
    if (+indexStep < totalStep) setCurrentstep(stepKeys[indexStep + 1]);
  }
  return <>{props.children(prevStep, nextStep, CurrentStep, steps)}</>;
}

Stepper.propTypes = {
  data: propTypes.object.isRequired,
  initialStep: propTypes.string,
};
