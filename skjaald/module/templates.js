/**
 * Define a set of template paths to pre-load
 * Pre-loaded templates are compiled and cached for fast access when rendering
 * @return {Promise}
 */
export const preloadHandlebarsTemplates = async function() {
  return loadTemplates([

    // Shared Partials
    "systems/skjaald/templates/actors/parts/active-effects.html",

    // Actor Sheet Partials
    "systems/skjaald/templates/actors/parts/actor-traits.html",
    "systems/skjaald/templates/actors/parts/actor-inventory.html",
    "systems/skjaald/templates/actors/parts/actor-features.html",
    "systems/skjaald/templates/actors/parts/actor-spellbook.html",

    // Item Sheet Partials
    "systems/skjaald/templates/items/parts/item-action.html",
    "systems/skjaald/templates/items/parts/item-activation.html",
    "systems/skjaald/templates/items/parts/item-description.html",
    "systems/skjaald/templates/items/parts/item-mountable.html"
  ]);
};
