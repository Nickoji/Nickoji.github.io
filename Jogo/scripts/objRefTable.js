const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Sin,
		C3.Plugins.HTMLElement,
		C3.Behaviors.Platform,
		C3.Behaviors.scrollto,
		C3.Behaviors.solid,
		C3.Behaviors.MoveTo,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.Sprite.Cnds.IsOutsideLayout,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Behaviors.MoveTo.Acts.MoveToObject
	];
};
self.C3_JsPropNameTable = [
	{Senóide: 0},
	{Personagem: 0},
	{ElementoHTML: 0},
	{Plataforma: 0},
	{CentrarEm: 0},
	{txwro5tmnqx: 0},
	{Sólido: 0},
	{Terreno: 0},
	{pngtreenaturewallpapersimage_: 0},
	{a8bfc3cab5b2145427101be9e: 0},
	{Sprite: 0},
	{MoverPara: 0},
	{Sprite2: 0}
];

self.InstanceType = {
	Personagem: class extends self.ISpriteInstance {},
	ElementoHTML: class extends self.IHTMLElementInstance {},
	txwro5tmnqx: class extends self.ISpriteInstance {},
	Terreno: class extends self.ISpriteInstance {},
	pngtreenaturewallpapersimage_: class extends self.ISpriteInstance {},
	a8bfc3cab5b2145427101be9e: class extends self.ISpriteInstance {},
	Sprite: class extends self.ISpriteInstance {},
	Sprite2: class extends self.ISpriteInstance {}
}