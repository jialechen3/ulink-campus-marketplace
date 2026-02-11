
import React from 'react';
import { ICONS, MOCK_COLLEGES } from '../constants';

interface Props {
  onSelect: (id: string) => void;
}

const CollegeIcon: React.FC<{ name: string; src: string }> = ({ name, src }) => {
  const [level, setLevel] = React.useState(0); // 0: Primary (High-res), 1: Secondary (Robust), 2: Fallback (Initials)

  const isUrl = src.startsWith('http');
  const domain = isUrl ? null : src;

  const sources = React.useMemo(() => {
    const list = [];
    if (isUrl) {
      list.push(src);
      // Fallback domain extraction from URL for tertiary fallback
      try {
        const d = new URL(src).hostname.replace('www.', '');
        list.push(`https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://${d}&size=128`);
      } catch (e) { }
    } else if (src.startsWith('/')) {
      // Local path in public folder
      list.push(src);
    } else {
      list.push(`https://apistemic.com/logos/${src}`);
      list.push(`https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://${src}&size=128`);
    }
    return list;
  }, [src, isUrl]);

  if (level >= sources.length) {
    return (
      <div className="size-12 rounded-lg bg-primary/20 flex items-center justify-center border border-primary/30 shrink-0">
        <span className="text-primary font-bold text-xl">{name.charAt(0)}</span>
      </div>
    );
  }

  const isLocal = src.startsWith('/');

  return (
    <div className="size-12 rounded-lg overflow-hidden shrink-0 bg-brand-input border border-brand-border flex items-center justify-center">
      <img
        src={sources[level]}
        className={`w-full h-full ${isLocal ? 'object-cover' : 'object-contain p-1.5'}`}
        alt={name}
        onError={() => setLevel(prev => prev + 1)}
      />
    </div>
  );
};

const CollegeSelectionScreen: React.FC<Props> = ({ onSelect }) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const filteredColleges = MOCK_COLLEGES.filter(college => {
    const searchTerms = searchQuery.toLowerCase().trim().split(/\s+/);
    if (searchTerms.length === 0 || (searchTerms.length === 1 && searchTerms[0] === "")) return true;

    const collegeName = college.name.toLowerCase();
    const collegeLocation = college.location.toLowerCase();

    return searchTerms.every(term =>
      collegeName.includes(term) || collegeLocation.includes(term)
    );
  });

  return (
    <div className="flex flex-col min-h-screen bg-brand-bg">
      <div className="sticky top-0 z-50 flex items-center bg-brand-bg p-4 pb-2 border-b border-brand-border">
        <h2 className="text-white text-lg font-bold flex-1 text-center">College Selection</h2>
      </div>

      <div className="p-4 pt-8">
        <h2 className="text-white text-[32px] font-bold leading-tight mb-2">Find your campus</h2>
        <p className="text-brand-muted text-base leading-relaxed">
          Join your university's marketplace to buy and sell with fellow students.
        </p>
      </div>

      <div className="px-4 py-2">
        <div className="flex h-14 w-full items-stretch rounded-xl bg-brand-input overflow-hidden focus-within:ring-2 focus-within:ring-primary/50 transition-all">
          <div className="text-brand-muted flex items-center justify-center pl-4">
            {ICONS.MagnifyingGlass}
          </div>
          <input
            placeholder="Search your university"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex w-full bg-transparent border-none text-white focus:ring-0 placeholder:text-brand-muted px-4 pl-2"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="px-4 text-brand-muted hover:text-white transition-colors"
            >
              {ICONS.X}
            </button>
          )}
        </div>
      </div>

      <div className="px-4 py-4">
        <button
          onClick={() => { }}
          className="flex h-12 w-full items-center justify-center rounded-xl bg-primary/10 text-primary gap-2 font-bold transition-colors hover:bg-primary/20"
        >
          {ICONS.Location}
          <span>Detect my location</span>
        </button>
      </div>

      <div className="mt-6 flex-1">
        <div className="flex items-center justify-between px-4 mb-4">
          <h3 className="text-white text-lg font-bold">
            {searchQuery ? 'Search Results' : 'Popular Colleges'}
          </h3>
          {!searchQuery && <button className="text-primary text-sm font-semibold">View all</button>}
        </div>

        <div className="flex flex-col gap-1 px-2 pb-10">
          {filteredColleges.length > 0 ? (
            filteredColleges.map((college) => (
              <div
                key={college.id}
                onClick={() => onSelect(college.id)}
                className="flex items-center p-3 rounded-xl hover:bg-brand-input cursor-pointer transition-all active:scale-[0.98]"
              >
                <CollegeIcon name={college.name} src={college.image} />
                <div className="ml-4 flex-1">
                  <p className="text-white font-semibold">{college.name}</p>
                  <p className="text-brand-muted text-xs">{college.location}</p>
                </div>
                <div className="text-brand-muted">
                  {ICONS.ChevronRight}
                </div>
              </div>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center py-10 px-4 text-center">
              <div className="text-brand-muted mb-4 opacity-50">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                </svg>
              </div>
              <p className="text-white font-bold text-lg mb-1">No colleges found</p>
              <p className="text-brand-muted text-sm">We couldn't find any campus matching "{searchQuery}"</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CollegeSelectionScreen;
