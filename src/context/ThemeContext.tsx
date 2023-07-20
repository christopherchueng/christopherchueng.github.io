import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";

type Theme = "light" | "dark";

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

interface Props {
  children?: ReactNode;
}

export const ThemeContext = createContext<ThemeContextType>(
  {} as ThemeContextType,
);

export const useThemeContext = () => useContext<ThemeContextType>(ThemeContext);

export default function ThemeProvider({ children }: Props) {
  const [theme, setTheme] = useState<Theme>(
    (localStorage.getItem("theme") as "light" | "dark") || "light",
  );

  const toggleTheme = useCallback(() => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
