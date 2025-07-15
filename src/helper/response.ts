interface FormatJsonProps {
  success?: boolean;
  message?: string;
  body: object | [];
  links?: [];
}

export const formatJson = ({
  success = true,
  message = "",
  body,
  links = [],
}: FormatJsonProps) => ({
  success,
  message,
  body,
  links,
});
