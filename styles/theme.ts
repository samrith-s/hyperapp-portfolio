const colors = {
    base: '#202040',
    light: '#f4f4f4',
    success: '#5cb85c',
};

export type Colors = Record<keyof typeof colors, string>;

const variables = {
    fontSize: 12,
    margin: 10,
    padding: 10,
    borderRadius: 10,
};

export type Variables = Record<keyof typeof variables, number>;

export const theme: Theme = {
    colors,
    variables,
};

export type Theme = {
    colors: Colors;
    variables: Variables;
};
