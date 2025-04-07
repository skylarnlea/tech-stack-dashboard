import TechItem from './TechItem';

export default function TechList({ techItems }) {
    return (
        <div className="grid">
            {techItems.map((tech) => (
                <TechItem key={tech.id} tech={tech} />
            ))}
        </div>
    );
}