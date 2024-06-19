declare namespace JSX {
  interface IntrinsicElements {
    "ion-icon": any;
  }
}

declare namespace ThemeContextNamespace {
  interface ThemeContextType {
    theme: string;
    toggleTheme: () => void;
  }
}

declare namespace ViewContextNamespace {
  interface ViewContextType {
    view: string;
    toggleView: () => void;
  }
}

declare namespace ModalContextNamespace {
  interface ModalContextType {
    isOpen: boolean;
    openModal: () => void;
    insertContent: (content: React.ReactNode) => void;
  }
}

declare namespace FilterContextNamespace {
  interface FilterContextType {
    filter: string;
    selectFilter: (filter: string) => void;
  }
}

declare namespace SortContextNamespace {
  interface SortContextType {
    sort: string;
    selectSort: (sort: string) => void;
  }
}
