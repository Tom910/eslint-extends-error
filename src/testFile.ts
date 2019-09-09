export type SyncJsonFile = ({
    path,
    newContent,
}: {
    path: string;
    newContent: any;
}) => Promise<void>;

let i = 0;
const count = i++;
