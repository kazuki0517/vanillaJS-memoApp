import NotesAPI from "./NotesAPI.js";
import NotesView from "./NotesView.js";

// NotesAPI.saveNote({
// 	id: 123456,
// 	title: "更新した二回目のメモです",
// 	body: "メモアプリ作成中",
// });

const view = new NotesView(app, {
	onNoteSelect() {
		console.log("ノートが選択されました");
	},
	onNoteAdd() {
		console.log("ノートが追加されました");
	},

	onNoteEdit(newTitle, newBody) {
		console.log(newTitle);
		console.log(newBody);
	},
});

console.log(NotesAPI.getAllNotes());

const notes = NotesAPI.getAllNotes();
//サイドバーにノートを全部表示
view.updateNoteList(notes);
