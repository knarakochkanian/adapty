type AvatarProps = {
  name: string;
};

export default function Avatar({ name }: AvatarProps) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-500/20 text-sm font-semibold text-primary-500">
      {initials}
    </div>
  );
}
