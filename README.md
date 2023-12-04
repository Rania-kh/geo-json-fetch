# Geo-JSON-Fetch

This project contains a React component named `GeolocationBox` designed for fetching GeoJSON data using the OpenStreetMap API based on user-input coordinates.

## Introduction

The `GeolocationBox` component fetches GeoJSON data for geographical coordinates specified by the user. It utilizes React and external libraries to perform asynchronous data fetching, validation, and display the fetched GeoJSON data in JSON format within the application.

## Setup

1. Install required dependencies:
  yarn install 


2. Import the `GeolocationBox` component into your React application.

3. Implement the component by passing required props and leveraging its functionality for fetching GeoJSON data.

## Usage

The `GeolocationBox` component comprises a form that prompts users to input minimum and maximum longitude and latitude values. Upon submission, the component fetches GeoJSON data from the OpenStreetMap API based on the provided coordinates.

## Dependencies

- @mui/material
- formik
- yup
- react
- osmtogeojson

## Components

### `GeolocationBox`

The `GeolocationBox` component fetches GeoJSON data and displays it in the application. It includes the following key functionalities:

- Form for entering longitude and latitude values
- LoadingButton to trigger data fetching
- Display of fetched GeoJSON data in a JSON format


### `TextInput`

The `TextInput` component is a custom component or a wrapper around Material-UI's input field:

- Rendering an input field in the UI.
- Managing user input and changes.
- Handling form validation or restrictions (e.g., accepting only certain types of input).



## Contributions
Contributions, issues, and feature requests are welcome. Feel free to submit pull requests or open issues in the repository.

## License
This project is licensed under the MIT License.


This README provides an overview of the project, its components, usage instructions, dependencies, and encourages contributions. Feel free to adjust or expand it based on your project's specific details and requirements.
