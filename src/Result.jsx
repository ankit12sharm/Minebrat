import React from 'react';

function Result({selectCity,selectState}) {
  return (
    <div>
      <h1>You Have selected {selectCity}, {selectState}</h1>
    </div>
  );
}

export default Result;