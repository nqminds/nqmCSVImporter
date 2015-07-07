
"use strict";

module.exports = {
  /*
   * The URI of the hub command api.
   */
  "commandHost": "http://localhost:3102",

  /*
   * The target dataset in the hub.
   */
  "targetDataset": {
    "id":"dataset-2snfDA",
    "scheme": {
      "date": "Date",
      "total": {
        "uk": "Number",
        "london": "Number"
      },
      "employee": {
        "uk": "Number",
        "london": "Number"
      },
      "nested": {
        "self-employed": [ "Number" ]
      }
    }
  },

  /*
   * Define how the CSV columns will map to the schema defined in the dataset.
   * The schemaMapping array will reflect the order of the columns in the CSV.
   * If a target is defined for a column the data will be copied to the named field in the dataset.
   * If there is no target property that column will be ignored.
   */
  "schemaMapping": [
    { target: "date" },
    { target: "total.uk" },
    { target: "total.london" },
    { target: "employee.uk" },
    { target: "employee.london" },
    { target: "nested.self-employed" },
    { target: "nested.self-employed" }
  ],

  /*
   * Remote location of the source file.
   */
  "sourceUrl": "http://two268.com/nqm/workforce-jobs-ons.csv",

  /*
   * Alternatively, specify the absolute path to a local file.
   */
  "sourceFile": "/home/user/imports/file.csv",

  /*
   * The processing mode - need to experiment with which is more performant, but there may be some cases
   * where it's desirable to download the file and store it locally before processing.
   * Possible values are:
   *
   * local => file is downloaded and then the entire contents are read into memory at once, parsed and then processed.
   * Probably the fastest but not suitable for larger files.
   *
   * localStream => file is downloaded and then streamed into the parser and processed as data becomes available.
   * Suitable for larger files.
   *
   * remoteStream => file is not downloaded but streamed directly from the remote url into the parser and processed
   * as data becomes available.
   */
  "processingMode": "remoteStream",

  /*
   * The delimiter used in the source file.
   */
  "delimiter": ",",

  /*
   * Expected encoding of source data.
   */
  "encoding": "utf8",

  /*
   * The line at which processing is to start.
   */
  "startLine": 3,

  /*
   * The line at which processing is to stop.
   * Specify -1 for the entire file.
   */
  "endLine": -1
};
