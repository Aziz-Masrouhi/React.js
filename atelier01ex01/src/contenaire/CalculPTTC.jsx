import React from 'react';
import Pht from './Pht';
import Res from './Res';
import Bottons from './Bottons';
import TVA from './TVA';
export default function CalculPTTC() {
  return (
    <div>
      <form action="">
        <fieldset>
            <legend>CalculPTTC</legend>
        <table>
            <tr><td><Pht/></td></tr>
            <tr><td><TVA/></td></tr>
            <tr><td><Bottons/></td></tr>
            <tr><td><Res/></td></tr>
        </table>
        </fieldset>
        
      </form>
    </div>
  )
}
