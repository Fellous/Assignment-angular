
# Management Tool - Angular Web Application

## Overview

This project is a web application built using Angular to display and manage a list of data items. The application is based on the design provided in [Adobe XD](https://xd.adobe.com/view/0b1e0e68-be9f-4b48-96fa-2a4712032331-5e4d/).

The application allows users to:

- View a list of items retrieved from a JSON file.
- Create a new item by filling out a form.
- Edit an existing item in the list.
- Switch between tile view and table view.
- Filter the list of items using a search field.
- Implement pagination and adjust page size.

## User Cases

### 1. Retrieve List of Items
The application retrieves a list of items from a local JSON file using an HTTP service. This list is displayed in a table or tile view, depending on the user's preference.

### 2. Create a New Item
Users can create a new item by clicking on the "Create New" button, which opens a form on the side panel. The user can fill out the item's details, such as name, description, and color, and submit the form to add the item to the list.

### 3. Edit an Existing Item
By clicking on an existing item in the list, users can edit its details. The form will populate with the item's current information, allowing the user to make changes and save them.

### 4. Switch View Modes
The application supports switching between a table view and a tile view. Users can toggle between these views by clicking the "Toggle View" button.

### 5. Filter the List
A search field is provided to filter the list of items. Users can type in this field to filter the items by name.

### 6. Pagination and Page Size Adjustment
The application implements pagination to manage the display of items. Users can adjust the number of items displayed per page.

## Requirements

- Angular 10+ is used as the frontend framework.
- State management is optional but can be implemented using NGRX.
- The application implements at least 4 user cases, including item retrieval, creation, editing, and view switching.

## Project Setup

### Prerequisites
- Node.js and npm should be installed on your system.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-repository/management-tool.git
   cd management-tool
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

### Running the Application

1. Start the development server:

   ```bash
   ng serve
   ```

2. Open your browser and navigate to `http://localhost:4200`.

### Building the Application

To build the project, run:

```bash
ng build
```

The build artifacts will be stored in the `dist/` directory.

## Assumptions

- The user's name for item creation is hardcoded as "User Name" for demonstration purposes.
- The data is retrieved from a local JSON file; in a real-world scenario, this would likely be from an API.
- State management (NGRX) was not implemented as it was optional.

## Status

- The project is functional and meets the basic requirements. However, some features such as saving the created items persistently are not implemented in this demo.

## Future Enhancements

- Implement NGRX for state management.
- Persist new and edited items using a backend API.
- Add authentication to manage user-specific data.
- Improve UI/UX based on further design iterations.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```

### Explications des sections :

- **Overview** : Donne une vue d'ensemble du projet et des fonctionnalités principales.
- **User Cases** : Détaille les fonctionnalités principales que l'application doit implémenter, en se basant sur les spécifications.
- **Requirements** : Mentionne les prérequis techniques (Angular 10+).
- **Project Setup** : Explique comment installer et exécuter l'application.
- **Assumptions** : Mentionne les hypothèses et simplifications faites pendant le développement.
- **Status** : Indique l'état actuel du projet.
- **Future Enhancements** : Suggère des améliorations futures pour le projet.
- **License** : Mentionne la licence du projet.
