import './style.css';
import typescriptLogo from './typescript.svg';
import viteLogo from '/vite.svg';
import { setupFactory } from './contacts/dataFactory.ts';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Tim&apos;s Ugly Fake Data Wizard</h1>
    <h2>Let's Make Some Fake Magic</h2>
    <div class="card">
      <label for="data-length">How many items?</label>
      <input type="number" name="data-len" id="data-length">&nbsp;
      <button id="factory" type="button">Go!</button><br />
      <br />
      <textarea id="output" cols="150" rows="50"></textarea><br />
    </div>
  </div>
`;

setupFactory(
  document.querySelector<HTMLInputElement>('#data-length')!,
  document.querySelector<HTMLButtonElement>('#factory')!,
  document.querySelector<HTMLTextAreaElement>('#output')!,
);
