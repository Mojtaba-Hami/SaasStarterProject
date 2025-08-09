function Icon({ name, className }) {
  return (
    <span dangerouslySetInnerHTML={{ __html: name }} className={className} />
  );
}

export default Icon;

// این کامپوننت برای ایکون ها استفاده میشه
