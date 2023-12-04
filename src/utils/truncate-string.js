// Truncate string when showing the event list
export default function truncateString(text) {
    const MAX_SIZE = 100;
    let truncated = text.substr(0, MAX_SIZE);
  
    if (text.length > MAX_SIZE) {
      truncated = truncated + '...';
    }
  
    return truncated
}