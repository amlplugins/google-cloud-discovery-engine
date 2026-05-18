/**
 * @amlplugins/google-cloud-discovery-engine
 *
 * Thin namespaced re-export of the native @google-cloud/discoveryengine SDK.
 *
 * Symmetry rule (.claude/rules/definitions/ageni.md): every @amlplugins/google-*
 * package shares this shape — a single root index re-exporting the wrapped
 * vendor SDK with zero domain modeling on top.
 *
 * Discovery Engine.
 */

import * as _sdk from "@google-cloud/discoveryengine";
export * from "@google-cloud/discoveryengine";
export { _sdk as sdk };
export default _sdk;
