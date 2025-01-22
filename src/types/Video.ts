export type Video = {
    title: string;
    category: [string];
    teacher: string;
    imageUrl: string;

    setTitle: (title: string) => void;
};