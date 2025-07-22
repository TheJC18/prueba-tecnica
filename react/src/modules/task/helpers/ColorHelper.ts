/**
 * Helper de colores para la aplicación de tareas
 * Centraliza toda la paleta de colores para evitar hardcodeo
 */

export interface ColorPalette {
  // Colores primarios marrones
  primary: {
    darkBrown: string;
    mediumBrown: string;
    lightBrown: string;
    tan: string;
  };
  
  // Colores de fondo
  background: {
    beige: string;
    lightBeige: string;
    warmWhite: string;
    cardBackground: string;
  };
  
  // Colores de texto
  text: {
    primary: string;
    secondary: string;
    muted: string;
    accent: string;
  };
  
  // Gradientes
  gradients: {
    primary: string;
    background: string;
    card: string;
    button: string;
    buttonSecondary: string;
  };
  
  // Colores de estado
  state: {
    hover: string;
    focus: string;
    border: string;
    borderLight: string;
  };
}

/**
 * Paleta de colores principal de la aplicación
 */
export const colors: ColorPalette = {
  primary: {
    darkBrown: '#8B4513',    // Saddle Brown
    mediumBrown: '#A0522D',  // Sienna
    lightBrown: '#D2B48C',   // Tan
    tan: '#DEB887',          // Burlywood
  },
  
  background: {
    beige: '#F5F5DC',        // Beige
    lightBeige: '#FAF7F0',   // Light beige
    warmWhite: '#FFFEF7',    // Warm white
    cardBackground: '#FFFFFF', // Pure white
  },
  
  text: {
    primary: '#5D4037',      // Dark brown text
    secondary: '#8D6E63',    // Medium brown text
    muted: '#6D4C41',        // Muted brown text
    accent: '#A0522D',       // Accent brown text
  },
  
  gradients: {
    primary: `linear-gradient(135deg, #8B4513 0%, #A0522D 100%)`,
    background: `linear-gradient(135deg, #8B4513 0%, #D2B48C 50%, #F5F5DC 100%)`,
    card: `linear-gradient(145deg, #FFFFFF 0%, #FAF7F0 100%)`,
    button: `linear-gradient(135deg, #A0522D 0%, #8B4513 100%)`,
    buttonSecondary: `linear-gradient(135deg, #E5D5C8 0%, #D2B48C 100%)`,
  },
  
  state: {
    hover: 'rgba(139, 69, 19, 0.1)',
    focus: 'rgba(139, 69, 19, 0.25)',
    border: 'rgba(139, 69, 19, 0.1)',
    borderLight: '#DDD5C7',
  },
};

/**
 * Utilidades para trabajar con colores
 */
export class ColorHelper {
  /**
   * Convierte un color hex a rgba con opacidad
   */
  static hexToRgba(hex: string, opacity: number): string {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  }
  
  /**
   * Genera un gradiente personalizado
   */
  static createGradient(angle: number, ...colorStops: Array<{color: string; position?: number}>): string {
    const stops = colorStops.map((stop, index) => {
      const position = stop.position ?? (index * (100 / (colorStops.length - 1)));
      return `${stop.color} ${position}%`;
    }).join(', ');
    
    return `linear-gradient(${angle}deg, ${stops})`;
  }
  
  /**
   * Obtiene el color de fondo alternado para listas
   */
  static getAlternatingBackground(index: number): string {
    return index % 2 === 0 ? ColorHelper.hexToRgba(colors.background.lightBeige, 0.3) : 'transparent';
  }
  
  /**
   * Obtiene estilos de hover para botones
   */
  static getButtonHoverStyles(baseColor: string) {
    return {
      transform: 'translateY(-2px)',
      boxShadow: `0 6px 20px ${ColorHelper.hexToRgba(baseColor, 0.3)}`,
    };
  }
  
  /**
   * Obtiene estilos de focus para inputs
   */
  static getInputFocusStyles() {
    return {
      borderColor: colors.primary.darkBrown,
      boxShadow: `0 0 0 0.2rem ${colors.state.focus}`,
    };
  }
}

/**
 * Exportación por defecto de la paleta de colores
 */
export default colors;
