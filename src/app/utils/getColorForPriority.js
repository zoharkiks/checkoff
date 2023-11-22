export const getColorForPriority = (priority) => {
    switch (priority) {
        case 'Low Priority':
          return 'bg-blue-400';
        case 'Medium Priority':
          return 'bg-yellow-400';
        case 'High Priority':
          return 'bg-red-400';
        default:
          return 'bg-gray-400';
      }
}