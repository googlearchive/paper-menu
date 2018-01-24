import '../polymer/polymer.js';
import '../iron-menu-behavior/iron-menu-behavior.js';
import '../paper-styles/default-theme.js';
import './paper-menu-shared-styles.js';
Polymer({
  _template: Polymer.html`
    <style include="paper-menu-shared-styles"></style>
    <style>
      :host {
        display: block;
        padding: 8px 0;

        background: var(--paper-menu-background-color, --primary-background-color);
        color: var(--paper-menu-color, --primary-text-color);

        @apply(--paper-menu);
      }
    </style>

    <div class="selectable-content">
      <content></content>
    </div>
`,

  is: 'paper-menu',

  behaviors: [
    Polymer.IronMenuBehavior
  ]
});
