// @flow
type Props = {
  theme: {
    colors: {
      [color: string]: string,
    },
  },
};

export const getColor = (colorName: string) => (props: Props) =>
  props.theme.colors[colorName];
