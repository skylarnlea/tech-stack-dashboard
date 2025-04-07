export default function FilterBar({ searchTerm, onSearch, selectedCategory, onCategoryChange }) {
    return (
        <div className="filter-bar">
            <input 
                type="text"
                placeholder="Search tech..."
                value={searchTerm}
                onChange={(e) => onSearch(e.target.value)}
            />
            <select value={selectedCategory} onChange={(e) => onCategoryChange(e.target.value)}>
                <option value="">All</option>
                <option value="Frontend">Frontend</option>
                <option value="Backend">Backend</option>
                <option value="Database">Database</option>
                <option value="Language">Language</option>
            </select>
        </div>
    );
}