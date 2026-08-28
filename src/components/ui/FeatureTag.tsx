interface FeatureTagProps {
  label: string;
}

export default function FeatureTag({ label }: FeatureTagProps) {
  return <span className="feature-tag">{label}</span>;
}
