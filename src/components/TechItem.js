export default function TechItem({ tech }) {
    return (
        <div className="card">
            <h3>{tech.icon} {tech.name}</h3>
            <p>{tech.category}</p>
        </div>
    );
}