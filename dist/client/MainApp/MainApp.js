const runtimeUrl = window.elementoRuntimeUrl || 'https://elemento.online/lib/runtime.js'
const Elemento = await import(runtimeUrl)
const {React, trace, elProps, stateProps, wrapFn} = Elemento

// MainPage.js
const MainPage_TileItemsItem = React.memo(function MainPage_TileItemsItem(props) {
    const pathTo = name => props.path + '.' + name
    const parentPathWith = name => Elemento.parentPath(props.path) + '.' + name
    const {$item, $itemId, $index, $selected, onClick} = props
    const {ItemSetItem, Block, TextElement} = Elemento.components
    const {And, Not, Random, ListContains, If} = Elemento.globalFunctions
    const _state = Elemento.useGetStore()
    const Cols = _state.useObject(parentPathWith('Cols'))
    const GameRunning = _state.useObject(parentPathWith('GameRunning'))
    const IsRoundComplete = _state.useObject(parentPathWith('IsRoundComplete'))
    const MazeSequence = _state.useObject(parentPathWith('MazeSequence'))
    const IsMiddle = _state.useObject(parentPathWith('IsMiddle'))
    const IsStart = _state.useObject(parentPathWith('IsStart'))
    const EntrySide = _state.useObject(parentPathWith('EntrySide'))
    const ExitSide = _state.useObject(parentPathWith('ExitSide'))
    const TileBlock = _state.setObject(pathTo('TileBlock'), new Block.State(stateProps(pathTo('TileBlock')).props))
    const Centre = _state.setObject(pathTo('Centre'), new Block.State(stateProps(pathTo('Centre')).props))
    const TopEntry = _state.setObject(pathTo('TopEntry'), new Block.State(stateProps(pathTo('TopEntry')).props))
    const TopExit = _state.setObject(pathTo('TopExit'), new Block.State(stateProps(pathTo('TopExit')).props))
    const RightEntry = _state.setObject(pathTo('RightEntry'), new Block.State(stateProps(pathTo('RightEntry')).props))
    const RightExit = _state.setObject(pathTo('RightExit'), new Block.State(stateProps(pathTo('RightExit')).props))
    const BottomEntry = _state.setObject(pathTo('BottomEntry'), new Block.State(stateProps(pathTo('BottomEntry')).props))
    const BottomExit = _state.setObject(pathTo('BottomExit'), new Block.State(stateProps(pathTo('BottomExit')).props))
    const LeftEntry = _state.setObject(pathTo('LeftEntry'), new Block.State(stateProps(pathTo('LeftEntry')).props))
    const LeftExit = _state.setObject(pathTo('LeftExit'), new Block.State(stateProps(pathTo('LeftExit')).props))
    const canDragItem = And(GameRunning, Not(IsRoundComplete))
    const styles = elProps(pathTo('TileItems.Styles')).aspectRatio('1').width(100 / Cols + '%').border('1px solid blue').boxSizing('border-box').backgroundColor(GameRunning ? 'green' : 'pink').props

    return React.createElement(ItemSetItem, {path: props.path, item: $item, itemId: $itemId, index: $index, onClick, canDragItem, styles},
        React.createElement(Block, elProps(pathTo('TileBlock')).layout('positioned').styles(elProps(pathTo('TileBlock.Styles')).backgroundColor('lightgray').width('100%').height('100%').borderStyle('solid').borderLeftColor('green').boxSizing('border-box').maxHeight('100%').rotate(Random(4) * 0).props).props,
            React.createElement(TextElement, elProps(pathTo('TileNo')).show(true).styles(elProps(pathTo('TileNo.Styles')).position('absolute').top('0').left('0').props).content($item).props),
            React.createElement(Block, elProps(pathTo('Centre')).layout('positioned').show(ListContains(MazeSequence, +$item)).styles(elProps(pathTo('Centre.Styles')).backgroundColor(If(IsMiddle($item), 'yellow', () => If(IsStart($item), 'green', 'orange'))).height('100%').width('100%').clipPath(If(IsMiddle($item), 'circle(12% at center)', 'rect(38% 62% 62% 38%)')).position('absolute').top('0').left('50%').translate('-50%').zIndex(1000).rotate(If(IsStart($item), '45deg')).props).props),
            React.createElement(Block, elProps(pathTo('TopEntry')).layout('positioned').show(EntrySide($item) == 'top').styles(elProps(pathTo('TopEntry.Styles')).backgroundColor('blue').height('100%').width('100%').clipPath('polygon(45% 0, 45% 25%, 38% 25%, 50% 38%, 62% 25%, 55% 25%, 55% 0)').position('absolute').top('0').left('50%').translate('-50%').props).props),
            React.createElement(Block, elProps(pathTo('TopExit')).layout('positioned').show(ExitSide($item) == 'top').styles(elProps(pathTo('TopExit.Styles')).backgroundColor('blue').height('100%').width('100%').clipPath('polygon(45% 50%, 45% 13%, 38% 13%, 50% 0, 62% 13%, 55% 13%, 55% 50%)').position('absolute').top('0').left('0').props).props),
            React.createElement(Block, elProps(pathTo('RightEntry')).layout('positioned').show(EntrySide($item) == 'right').styles(elProps(pathTo('RightEntry.Styles')).height('100%').width('100%').clipPath('polygon(100% 45%, 75% 45%, 75% 38%, 62% 50%, 75% 62%, 75% 55%, 100% 55%)').position('absolute').top('0').backgroundColor('blue').left('0').props).props),
            React.createElement(Block, elProps(pathTo('RightExit')).layout('positioned').show(ExitSide($item) == 'right').styles(elProps(pathTo('RightExit.Styles')).height('100%').width('100%').clipPath('polygon(50% 45%, 87% 45%, 87% 38%, 100% 50%, 87% 62%, 87% 55%, 50% 55%)').position('absolute').top('0').backgroundColor('blue').left('0').props).props),
            React.createElement(Block, elProps(pathTo('BottomEntry')).layout('positioned').show(EntrySide($item) == 'bottom').styles(elProps(pathTo('BottomEntry.Styles')).backgroundColor('blue').height('100%').width('100%').clipPath('polygon(45% 100%, 45% 75%, 38% 75%, 50% 62%, 62% 75%, 55% 75%, 55% 100%)').position('absolute').top('0').left('0').props).props),
            React.createElement(Block, elProps(pathTo('BottomExit')).layout('positioned').show(ExitSide($item) == 'bottom').styles(elProps(pathTo('BottomExit.Styles')).backgroundColor('blue').height('100%').width('100%').clipPath('polygon(45% 50%, 45% 87%, 38% 87%, 50% 100%, 62% 87%, 55% 87%, 55% 50%)').position('absolute').top('0').left('0').props).props),
            React.createElement(Block, elProps(pathTo('LeftEntry')).layout('positioned').show(EntrySide($item) == 'left').styles(elProps(pathTo('LeftEntry.Styles')).backgroundColor('blue').height('100%').width('100%').clipPath('polygon(0 45%, 25% 45%, 25% 38%, 38% 50%, 25% 62%, 25% 55%, 0 55%)').position('absolute').top('0').left('0').props).props),
            React.createElement(Block, elProps(pathTo('LeftExit')).layout('positioned').show(ExitSide($item) == 'left').styles(elProps(pathTo('LeftExit.Styles')).height('100%').width('100%').clipPath('polygon(50% 45%, 13% 45%, 13% 38%, 0 50%, 13% 62%, 13% 55%, 50% 55%)').position('absolute').top('0').left('0').backgroundColor('blue').props).props),
    ),
    )
})


function MainPage(props) {
    const pathTo = name => props.path + '.' + name
    const {Page, TextElement, Timer, Data, Calculation, Dialog, Button, Block, ItemSet} = Elemento.components
    const {ItemAt, Or, Len, HasSameItems, FindIndex, If, NotNull, Random, Shuffle, Range, Select, Not, IsNull, FirstNotNull, FlatList, List, Last, WithoutItems, First, And, ListContains, Ceiling} = Elemento.globalFunctions
    const {Reset, Set, Update} = Elemento.appFunctions
    const _state = Elemento.useGetStore()
    const Tiles = _state.setObject(pathTo('Tiles'), new Data.State(stateProps(pathTo('Tiles')).props))
    const MazeSequence = _state.setObject(pathTo('MazeSequence'), new Data.State(stateProps(pathTo('MazeSequence')).props))
    const Status = _state.setObject(pathTo('Status'), new Data.State(stateProps(pathTo('Status')).value('Ready').props))
    const Score = _state.setObject(pathTo('Score'), new Data.State(stateProps(pathTo('Score')).value(0).props))
    const RoundSkipped = _state.setObject(pathTo('RoundSkipped'), new Data.State(stateProps(pathTo('RoundSkipped')).value(false).props))
    const Rows = _state.setObject(pathTo('Rows'), new Calculation.State(stateProps(pathTo('Rows')).value(3).props))
    const Cols = _state.setObject(pathTo('Cols'), new Calculation.State(stateProps(pathTo('Cols')).value(3).props))
    const TileCount = _state.setObject(pathTo('TileCount'), new Calculation.State(stateProps(pathTo('TileCount')).value(Rows * Cols).props))
    const MaxLength = _state.setObject(pathTo('MaxLength'), new Calculation.State(stateProps(pathTo('MaxLength')).value(9).props))
    const MinLength = _state.setObject(pathTo('MinLength'), new Calculation.State(stateProps(pathTo('MinLength')).value(7).props))
    const GameRunning = _state.setObject(pathTo('GameRunning'), new Calculation.State(stateProps(pathTo('GameRunning')).value(Or(Status == 'Playing', Status == 'Paused')).props))
    const Adjacent = _state.setObject(pathTo('Adjacent'), React.useCallback(wrapFn(pathTo('Adjacent'), 'calculation', (index) => {
        let top = If(index >= Cols, () => index - Cols, null)
        let bottom = If(index < TileCount - Cols, () => index + Cols, null)
        let left = If(index % Cols > 0, () => index - 1, null)
        let right = If(index % Cols < Cols - 1, () => index + 1, null)
        return Select([top, right, bottom, left], ($item, $index) => Not(IsNull($item)))
    }), [Cols, TileCount]))
    const AdjacentPosition = _state.setObject(pathTo('AdjacentPosition'), React.useCallback(wrapFn(pathTo('AdjacentPosition'), 'calculation', (tilePos, side) => {
        return FirstNotNull(
        If(side == 'top', () => If(tilePos >= Cols, () => tilePos - Cols, null)),
        If(side == 'bottom', () => If(tilePos < TileCount - Cols, () => tilePos + Cols, null)),
        If(side == 'left', () => If(tilePos % Cols > 0, () => tilePos - 1, null)),
        If(side == 'right', () => If(tilePos % Cols < Cols - 1, () => tilePos + 1, null))
        )
    }), [Cols, TileCount]))
    const AdjacentTile = _state.setObject(pathTo('AdjacentTile'), React.useCallback(wrapFn(pathTo('AdjacentTile'), 'calculation', (tilePosition, side) => {
        let tilePos = AdjacentPosition(tilePosition, side)
        return ItemAt(Tiles, tilePos)
    }), [AdjacentPosition, Tiles]))
    const Maze = _state.setObject(pathTo('Maze'), React.useCallback(wrapFn(pathTo('Maze'), 'calculation', (visited) => {
        if (Len(visited) == MaxLength) return visited
        let latest = Last(visited)
        let possibles = Shuffle(WithoutItems(Adjacent(latest), visited))
        for(const p of possibles) {
          let result = Maze(FlatList(visited, p))
          if (result) return result
        }
        if (Len(visited) >= MinLength) return visited
        return null
    }), [MaxLength, Adjacent, MinLength]))
    const StartNewRound = _state.setObject(pathTo('StartNewRound'), React.useCallback(wrapFn(pathTo('StartNewRound'), 'calculation', () => {
        Reset(RoundSkipped)
        Set(MazeSequence, Maze([Random(TileCount - 1)]))
        return Set(Tiles, Shuffle(Range(0, TileCount - 1)))
    }), [RoundSkipped, MazeSequence, Maze, TileCount, Tiles]))
    const EntrySide = _state.setObject(pathTo('EntrySide'), React.useCallback(wrapFn(pathTo('EntrySide'), 'calculation', (tileNo) => {
        let mazePosition = FindIndex(MazeSequence, tileNo)
        let prevTile = If(Not(IsNull(mazePosition)), () => ItemAt(MazeSequence, mazePosition - 1))
        
        return FirstNotNull(
          If (prevTile == tileNo - Cols, 'top'),
          If (prevTile == tileNo + 1, 'right'),
          If (prevTile == tileNo + Cols, 'bottom'),
          If (prevTile == tileNo - 1, 'left')
        )
    }), [MazeSequence, Cols]))
    const ExitSide = _state.setObject(pathTo('ExitSide'), React.useCallback(wrapFn(pathTo('ExitSide'), 'calculation', (tileNo) => {
        let mazePosition = FindIndex(MazeSequence, tileNo)
        let nextTile = If(Not(IsNull(mazePosition)), () => ItemAt(MazeSequence, mazePosition + 1))
        
        return FirstNotNull(
          If (nextTile == tileNo - Cols, 'top'),
          If (nextTile == tileNo + 1, 'right'),
          If (nextTile == tileNo + Cols, 'bottom'),
          If (nextTile == tileNo - 1, 'left')
        )
    }), [MazeSequence, Cols]))
    const AreSequential = _state.setObject(pathTo('AreSequential'), React.useCallback(wrapFn(pathTo('AreSequential'), 'calculation', (tileNo, nextTile) => {
        let exit = ExitSide(tileNo)
        let entry = EntrySide(nextTile)
        let sides = [exit, entry]
        
        return Or(
          HasSameItems(sides, ['left', 'right']),
          HasSameItems(sides, ['right', 'left']),
          HasSameItems(sides, ['top', 'bottom']),
          HasSameItems(sides, ['bottom', 'top'])
        )
    }), [ExitSide, EntrySide]))
    const NextTile = _state.setObject(pathTo('NextTile'), React.useCallback(wrapFn(pathTo('NextTile'), 'calculation', (tileNo) => {
        let exitSide = ExitSide(tileNo)
        let tilePosition = FindIndex(Tiles, tileNo)
        let nextTile = AdjacentTile(tilePosition, exitSide)
        return If(NotNull(nextTile), () => If(AreSequential(tileNo, nextTile), nextTile, null), null)
    }), [ExitSide, Tiles, AdjacentTile, AreSequential]))
    const TileRun = _state.setObject(pathTo('TileRun'), React.useCallback(wrapFn(pathTo('TileRun'), 'calculation', (tileNo) => {
        let nextInRun = NextTile(tileNo)
        return If(NotNull(nextInRun), () => FlatList(tileNo, TileRun(nextInRun)), () => List(tileNo))
    }), [NextTile]))
    const CurrentTileRun = _state.setObject(pathTo('CurrentTileRun'), new Calculation.State(stateProps(pathTo('CurrentTileRun')).value(TileRun(ItemAt(MazeSequence, 0))).props))
    const IsRunComplete = _state.setObject(pathTo('IsRunComplete'), new Calculation.State(stateProps(pathTo('IsRunComplete')).value(Len(CurrentTileRun) === Len(MazeSequence)).props))
    const IsRoundComplete = _state.setObject(pathTo('IsRoundComplete'), new Calculation.State(stateProps(pathTo('IsRoundComplete')).value(Or(IsRunComplete, RoundSkipped)).props))
    const Points = _state.setObject(pathTo('Points'), React.useCallback(wrapFn(pathTo('Points'), 'calculation', (word) => {
        let run = Len(CurrentTileRun)
        let bonus = If(IsRunComplete, 30, 0)
        return If(run < 4, 0, () => run * 10 + bonus)
    }), [CurrentTileRun, IsRunComplete]))
    const EndRound = _state.setObject(pathTo('EndRound'), React.useCallback(wrapFn(pathTo('EndRound'), 'calculation', () => {
        return Set(Score, Score + Points())
    }), [Score, Points]))
    const WhenRoundComplete_whenTrueAction = React.useCallback(wrapFn(pathTo('WhenRoundComplete'), 'whenTrueAction', async () => {
        await EndRound()
    }), [EndRound])
    const WhenRoundComplete = _state.setObject(pathTo('WhenRoundComplete'), new Calculation.State(stateProps(pathTo('WhenRoundComplete')).value(IsRoundComplete).whenTrueAction(WhenRoundComplete_whenTrueAction).props))
    const EndGame = _state.setObject(pathTo('EndGame'), React.useCallback(wrapFn(pathTo('EndGame'), 'calculation', () => {
        Set(Status, 'Ended')
        return EndRound()
    }), [Status, EndRound]))
    const GameTimer_endAction = React.useCallback(wrapFn(pathTo('GameTimer'), 'endAction', async ($timer) => {
        await EndGame()
    }), [EndGame])
    const GameTimer = _state.setObject(pathTo('GameTimer'), new Timer.State(stateProps(pathTo('GameTimer')).period(180).interval(1).endAction(GameTimer_endAction).props))
    const StartNewGame = _state.setObject(pathTo('StartNewGame'), React.useCallback(wrapFn(pathTo('StartNewGame'), 'calculation', () => {
        Reset(Score)
        Reset(GameTimer)
        Set(Status, 'Playing')
        StartNewRound()
        return GameTimer.Start()
    }), [Score, GameTimer, Status, StartNewRound]))
    const PauseGame = _state.setObject(pathTo('PauseGame'), React.useCallback(wrapFn(pathTo('PauseGame'), 'calculation', () => {
        Set(Status, 'Paused')
        return GameTimer.Stop()
    }), [Status, GameTimer]))
    const ContinueGame = _state.setObject(pathTo('ContinueGame'), React.useCallback(wrapFn(pathTo('ContinueGame'), 'calculation', () => {
        Set(Status, 'Playing')
        return GameTimer.Start()
    }), [Status, GameTimer]))
    const SwapTiles = _state.setObject(pathTo('SwapTiles'), React.useCallback(wrapFn(pathTo('SwapTiles'), 'calculation', (index1, index2) => {
        let piece1 = ItemAt(Tiles, index1)
        let piece2 = ItemAt(Tiles, index2)
        return Update(Tiles, {[index1]: piece2, [index2]: piece1})
    }), [Tiles]))
    const IsStart = _state.setObject(pathTo('IsStart'), React.useCallback(wrapFn(pathTo('IsStart'), 'calculation', (tileNo) => {
        return tileNo == First(MazeSequence)
    }), [MazeSequence]))
    const IsEnd = _state.setObject(pathTo('IsEnd'), React.useCallback(wrapFn(pathTo('IsEnd'), 'calculation', (tileNo) => {
        return tileNo == Last(MazeSequence)
    }), [MazeSequence]))
    const IsMiddle = _state.setObject(pathTo('IsMiddle'), React.useCallback(wrapFn(pathTo('IsMiddle'), 'calculation', (tileNo) => {
        return And(ListContains(MazeSequence, tileNo), Not(IsStart(tileNo)), Not(IsEnd(tileNo)))
    }), [MazeSequence, IsStart, IsEnd]))
    const Instructions = _state.setObject(pathTo('Instructions'), new Dialog.State(stateProps(pathTo('Instructions')).initiallyOpen(true).props))
    const StatsLayout = _state.setObject(pathTo('StatsLayout'), new Block.State(stateProps(pathTo('StatsLayout')).props))
    const ReadyPanel = _state.setObject(pathTo('ReadyPanel'), new Block.State(stateProps(pathTo('ReadyPanel')).props))
    const PlayPanel = _state.setObject(pathTo('PlayPanel'), new Block.State(stateProps(pathTo('PlayPanel')).props))
    const TileGrid = _state.setObject(pathTo('TileGrid'), new Block.State(stateProps(pathTo('TileGrid')).props))
    const TileItems = _state.setObject(pathTo('TileItems'), new ItemSet.State(stateProps(pathTo('TileItems')).items(Tiles).selectable('none').props))
    const EndedPanel = _state.setObject(pathTo('EndedPanel'), new Block.State(stateProps(pathTo('EndedPanel')).props))
    const PlayControls = _state.setObject(pathTo('PlayControls'), new Block.State(stateProps(pathTo('PlayControls')).props))
    const PausePanel = _state.setObject(pathTo('PausePanel'), new Block.State(stateProps(pathTo('PausePanel')).props))
    const ControlsLayout = _state.setObject(pathTo('ControlsLayout'), new Block.State(stateProps(pathTo('ControlsLayout')).props))
    const StartGame2_action = React.useCallback(wrapFn(pathTo('StartGame2'), 'action', async () => {
        await StartNewGame()
        await Instructions.Close()
    }), [StartNewGame, Instructions])
    const TileGrid_dropAction = React.useCallback(wrapFn(pathTo('TileGrid'), 'dropAction', async ($droppedItem, $droppedItemId, $droppedOnItem, $droppedOnItemId) => {
        //Log($droppedItem, $droppedItemId, $droppedOnItem, $droppedOnItemId)
        await SwapTiles($droppedItemId, $droppedOnItemId)
    }), [SwapTiles])
    const NewTiles_action = React.useCallback(wrapFn(pathTo('NewTiles'), 'action', async () => {
        await StartNewRound()
    }), [StartNewRound])
    const SkipRound_action = React.useCallback(wrapFn(pathTo('SkipRound'), 'action', () => {
        Set(RoundSkipped, true)
    }), [RoundSkipped])
    const StartGame_action = React.useCallback(wrapFn(pathTo('StartGame'), 'action', async () => {
        await StartNewGame()
    }), [StartNewGame])
    const StopGame_action = React.useCallback(wrapFn(pathTo('StopGame'), 'action', async () => {
        await EndGame()
    }), [EndGame])
    const PauseGame_action = React.useCallback(wrapFn(pathTo('PauseGame'), 'action', async () => {
        await PauseGame()
    }), [])
    const ContinueGame_action = React.useCallback(wrapFn(pathTo('ContinueGame'), 'action', async () => {
        await ContinueGame()
    }), [])
    const Instructions_action = React.useCallback(wrapFn(pathTo('Instructions'), 'action', async () => {
        await Instructions.Show()
    }), [])
    Elemento.elementoDebug(() => eval(Elemento.useDebugExpr()))

    return React.createElement(Page, elProps(props.path).props,
        React.createElement(TextElement, elProps(pathTo('Title')).styles(elProps(pathTo('Title.Styles')).fontFamily('fantasy').fontSize('28').color('#039a03').props).content('Jig-Maze').props),
        React.createElement(Timer, elProps(pathTo('GameTimer')).show(false).props),
        React.createElement(Data, elProps(pathTo('Tiles')).display(false).props),
        React.createElement(Data, elProps(pathTo('MazeSequence')).display(0).props),
        React.createElement(Data, elProps(pathTo('Status')).display(false).props),
        React.createElement(Data, elProps(pathTo('Score')).display(false).props),
        React.createElement(Data, elProps(pathTo('RoundSkipped')).display(false).props),
        React.createElement(Calculation, elProps(pathTo('Rows')).show(false).props),
        React.createElement(Calculation, elProps(pathTo('Cols')).show(false).props),
        React.createElement(Calculation, elProps(pathTo('TileCount')).show(false).props),
        React.createElement(Calculation, elProps(pathTo('MaxLength')).show(false).props),
        React.createElement(Calculation, elProps(pathTo('MinLength')).show(false).props),
        React.createElement(Calculation, elProps(pathTo('CurrentTileRun')).show(false).props),
        React.createElement(Calculation, elProps(pathTo('WhenRoundComplete')).show(false).props),
        React.createElement(Calculation, elProps(pathTo('IsRoundComplete')).show(false).props),
        React.createElement(Calculation, elProps(pathTo('IsRunComplete')).show(false).props),
        React.createElement(Calculation, elProps(pathTo('GameRunning')).show(false).props),
        React.createElement(Dialog, elProps(pathTo('Instructions')).layout('vertical').showCloseButton(true).styles(elProps(pathTo('Instructions.Styles')).padding('2em').props).props,
            React.createElement(TextElement, elProps(pathTo('InstructionsText')).allowHtml(true).content(`The aim is to move the tiles so that the arrows link up at each side to make a continuous run from the green start diamond to the orange end square.


You earn points for every tile in a run of 4 or more from the start.


If you get all the tiles in a run, you earn a bonus.  Or if you get stuck, you can tak the points you have and skip to a new set of tiles.


Click Continue when you complete or skip a set of tiles to start again with a new set.


You have 3 minutes in total.`).props),
            React.createElement(Button, elProps(pathTo('StartGame2')).content('Start Game').appearance('filled').show(Not(GameRunning)).action(StartGame2_action).props),
    ),
        React.createElement(Block, elProps(pathTo('StatsLayout')).layout('horizontal wrapped').styles(elProps(pathTo('StatsLayout.Styles')).fontSize('24').props).props,
            React.createElement(TextElement, elProps(pathTo('ScoreDisplay')).show(Or(GameRunning, Status == 'Ended')).styles(elProps(pathTo('ScoreDisplay.Styles')).fontSize('inherit').color('blue').marginRight('100').props).content(Score + ' points').props),
            React.createElement(TextElement, elProps(pathTo('TimeDisplay')).show(GameRunning).styles(elProps(pathTo('TimeDisplay.Styles')).fontSize('inherit').color('green').props).content(Ceiling(GameTimer. remainingTime) + 's left').props),
            React.createElement(TextElement, elProps(pathTo('GameOver')).show(Status == 'Ended').styles(elProps(pathTo('GameOver.Styles')).fontSize('inherit').color('white').backgroundColor('green').padding('0 0.5em').borderRadius('8px').props).content('Game Over').props),
    ),
        React.createElement(Block, elProps(pathTo('ReadyPanel')).layout('vertical').show(Status == 'Ready').props,
            React.createElement(TextElement, elProps(pathTo('Title')).styles(elProps(pathTo('Title.Styles')).color('#039a03').fontFamily('fantasy').fontSize('28').props).content('Welcome!').props),
            React.createElement(TextElement, elProps(pathTo('ReadyText')).styles(elProps(pathTo('ReadyText.Styles')).fontSize('20').props).content(`Drag the tiles to arrange them so that the arrows make a continuous path from start to finish.

Click Instructions for full details

Or Start Game to dive right in!`).props),
    ),
        React.createElement(Block, elProps(pathTo('PlayPanel')).layout('vertical').show(Or(Status == 'Playing', Status == 'Ended')).styles(elProps(pathTo('PlayPanel.Styles')).width('100%').props).props,
            React.createElement(Block, elProps(pathTo('TileGrid')).layout('horizontal wrapped').dropAction(TileGrid_dropAction).styles(elProps(pathTo('TileGrid.Styles')).width('100%').aspectRatio(Cols/Rows).maxWidth('500').border('1px solid gray').gap('0').props).props,
            React.createElement(ItemSet, elProps(pathTo('TileItems')).itemContentComponent(MainPage_TileItemsItem).props),
    ),
            React.createElement(Block, elProps(pathTo('EndedPanel')).layout('vertical').show(Status == 'Ended').props,
            React.createElement(TextElement, elProps(pathTo('Title')).styles(elProps(pathTo('Title.Styles')).fontFamily('fantasy').fontSize('28').color('#039a03').props).content('Congratulations!').props),
            React.createElement(TextElement, elProps(pathTo('Score')).content('You have scored ' + Score + ' points!').props),
            React.createElement(TextElement, elProps(pathTo('Whatnext')).content('Click Start Game to have another go').props),
    ),
            React.createElement(Block, elProps(pathTo('PlayControls')).layout('horizontal').props,
            React.createElement(TextElement, elProps(pathTo('RoundScore')).show(And(GameRunning, IsRoundComplete)).content(Points() + ' points!').props),
            React.createElement(Button, elProps(pathTo('NewTiles')).content(If(Not(IsRoundComplete), 'Skip to next Set of Tiles', 'Continue to Next Set of Tiles')).appearance('outline').show(Status == 'Playing' && IsRoundComplete).action(NewTiles_action).props),
            React.createElement(Button, elProps(pathTo('SkipRound')).content('Skip this Set of Tiles').appearance('outline').show(Status == 'Playing' && Not(IsRoundComplete)).action(SkipRound_action).props),
    ),
    ),
        React.createElement(Block, elProps(pathTo('PausePanel')).layout('vertical').show(Status == 'Paused').props,
            React.createElement(TextElement, elProps(pathTo('Title')).styles(elProps(pathTo('Title.Styles')).color('#7529df').fontFamily('Luckiest Guy').fontSize('28').props).content('Paused...').props),
            React.createElement(TextElement, elProps(pathTo('PauseText')).styles(elProps(pathTo('PauseText.Styles')).fontSize('20').props).content('Click Continue Game to carry on').props),
    ),
        React.createElement(Block, elProps(pathTo('ControlsLayout')).layout('horizontal').props,
            React.createElement(Button, elProps(pathTo('StartGame')).content('Start Game').appearance('filled').show(Not(GameRunning)).action(StartGame_action).props),
            React.createElement(Button, elProps(pathTo('StopGame')).content('Stop Game').appearance('outline').show(GameRunning).action(StopGame_action).props),
            React.createElement(Button, elProps(pathTo('PauseGame')).content('Pause Game').appearance('outline').show(Status == 'Playing').action(PauseGame_action).props),
            React.createElement(Button, elProps(pathTo('ContinueGame')).content('Continue Game').appearance('outline').show(Status == 'Paused').action(ContinueGame_action).props),
            React.createElement(Button, elProps(pathTo('Instructions')).content('Instructions').appearance('outline').action(Instructions_action).props),
    ),
    )
}

// appMain.js
export default function MainApp(props) {
    const pathTo = name => 'MainApp' + '.' + name
    const {App} = Elemento.components
    const pages = {MainPage}
    const appContext = Elemento.useGetAppContext()
    const _state = Elemento.useGetStore()
    const app = _state.setObject('MainApp', new App.State({pages, appContext}))

    return React.createElement(App, {...elProps('MainApp').props},)
}
