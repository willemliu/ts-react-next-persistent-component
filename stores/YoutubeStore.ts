import { StoreBase, AutoSubscribeStore, autoSubscribe } from 'resub';

export interface YoutubeState {
    isPlaying?: boolean;
    initialYoutubeId?: string;
    youtubeId: string;
}

/**
 * Global store for the Youtube player states.
 */
@AutoSubscribeStore
class YoutubeStore extends StoreBase {
    private youtubeId: string = '';
    private isPlaying: boolean = false;

    setIsPlaying() {
        this.isPlaying = true;
        this.trigger();
    }

    setIsPaused() {
        this.isPlaying = false;
        this.trigger();
    }

    setYoutubeId(youtubeId: string) {
        this.youtubeId = youtubeId;
        this.trigger();
    }

    @autoSubscribe
    getYoutubeId() {
        return this.youtubeId;
    }

    @autoSubscribe
    getIsPlaying() {
        return this.isPlaying;
    }
}

export default new YoutubeStore();
