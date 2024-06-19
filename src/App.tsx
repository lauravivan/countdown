import { Header, Main } from "@/components/index";
import {
  ThemeProvider,
  ViewProvider,
  ModalProvider,
  FilterProvider,
  SortProvider,
} from "@/context";

function App() {
  return (
    <ModalProvider>
      <ThemeProvider>
        <ViewProvider>
          <FilterProvider>
            <SortProvider>
              <Header />
              {/* <Main /> */}
            </SortProvider>
          </FilterProvider>
        </ViewProvider>
      </ThemeProvider>
    </ModalProvider>
  );
}

export default App;
