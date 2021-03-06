/**
 * metadata-service
 * This is the metadata service of consort-group. It handels CRU(D)-operations for the application metadata.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: manuel.hiemer@consort-it.de
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { NewProject } from './newProject';
import { Person } from './person';
import { Phase } from './phase';

/**
 * A project is the 'root entity' of CME. It contains Services.
 */
export interface Project {
  name: string;
  description?: string;
  id: string;
  team: Array<Person>;
  /**
   * e.g. as base64 encoded image, as mermaid markup (https://github.com/knsv/mermaid), link, plantUML ...
   */
  context?: string;
  /**
   * The phases of this project
   */
  phases: Array<Phase>;
}
