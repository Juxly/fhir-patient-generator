# Juxly FHIR Patient Generator

The goal of this library is to be able to randomly generate fhir data for
patients and conditions that would be long to specific specialties. Such as npm
run generate --specialty=neurology

## TODO

* Document installation and usage procedures

## Installation

This is where the instructions should go for how to install this

## Usage

This utility is used by navigating to its directory and running the following command

`npm run generate`

Its behavior can be modidfied by adding flags

`npm run generate --  [flags]`

The --verbose, --v flag makes the generater print out the entire patient and condition jsons as they are generated

`npm run generate -- --verbose`

The --quantity, --q flag sets how many patients to generate. It's dafault is 1

`npm run generate -- --quantity=5` generates 5 patients

`npm run generate -- --q=15` generates 5 patients

The --specialty, --s flag sets what specialty to generate patients with. The currently supported specialties are:
* nuerology
* hcc

`npm run generate -- --specialty=nuerology` generates 1 nuerology patient

`npm run generate -- --s=hcc` generates 1 hcc patient
